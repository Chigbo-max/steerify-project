import express from "express"; // Creates API routes
import mongoose from "mongoose"; // Connects to MongoDB
import dotenv from "dotenv";
import cors from "cors";
import passport from "passport";
import session from "express-session"; 
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { OAuth2Client } from "google-auth-library";
import User from "./models/User.js"; 

dotenv.config();
const app = express();
const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
}, async (accessToken, refreshToken, profile, done) => {
    try {
        let user = await User.findOne({ googleId: profile.id });
        if (!user) {
            user = new User({
                googleId: profile.id,
                name: profile.displayName,
                email: profile.emails[0].value,
                profilePic: profile.photos[0].value,
            });
            await user.save();
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
        return done(null, { user, token });
    } catch (error) {
        return done(error, null);
    }
}));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

// ✅ ADDING THE POST ROUTE FOR FRONTEND LOGIN REQUEST
app.post("/auth/google", async (req, res) => {
    try {
        const { authorization } = req.headers;
        if (!authorization || !authorization.startsWith("Bearer ")) {
            return res.status(401).json({ message: "Unauthorized request" });
        }

        const token = authorization.split("Bearer ")[1];
        const ticket = await googleClient.verifyIdToken({
            idToken: token.trim(),
            audience: process.env.GOOGLE_CLIENT_ID,
        });
        console.log("token received from front end", token)

        const payload = ticket.getPayload();
        let user = await User.findOne({ email: payload.email });
        if (!user) {
            user = new User({
                googleId: payload.sub,
                name: payload.name,
                email: payload.email,
                profilePic: payload.picture,
            });
            await user.save();
        }

        const appToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
        res.status(200).json({ message: "Login successful", token: appToken, user });
    } catch (error) {
        console.error("Google Login Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

app.get("/auth/google/callback", passport.authenticate("google", { failureRedirect: "/login" }), (req, res) => {
    const { token } = req.user;
    res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.redirect("http://localhost:5173/");
});

app.get("/auth/logout", (req, res) => {
    res.clearCookie("token");
    req.logout(() => {
        res.redirect("http://localhost:5173");
    });
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => app.listen(5000, () => console.log("Server running on port 5000")))
    .catch(err => console.error(err));
