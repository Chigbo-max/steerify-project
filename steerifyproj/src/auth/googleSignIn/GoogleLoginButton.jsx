import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

const GoogleLoginButton = () => {
    const handleSuccess = async ({ credential }) => {
        if (!credential) {
            console.error("Google login credential missing.");
            return;
        }

        console.log("Received credentials:", credential);

        setTimeout(async () => {
            try {
                const response = await axios.post(
                    "http://localhost:5000/auth/google",
                    {}, // Empty body since token is sent in headers
                    { headers: { Authorization: `Bearer ${credential}` } }
                );

                const { token, user } = response.data;
                console.log("Login Successful:", user);

                localStorage.setItem("token", token);
                window.location.href = "/"; // Redirect after login
            } catch (error) {
                console.error("Login failed:", error.response?.data || error.message);
            }
        }, 500); // Small delay to ensure token availability
    };

    return (
        <GoogleLogin
            onSuccess={handleSuccess}
            onError={() => console.error("Google Login Failed")}
        />
    );
};

export default GoogleLoginButton;
