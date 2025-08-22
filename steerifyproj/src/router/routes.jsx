import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Cleaning from "../pages/Cleaning/Cleaning";
import SteerifyLens from "../pages/SteerifyLens/SteerifyLens";
import Culture from "../pages/Culture/Culture";
import NewsLetter from '../pages/NewsLetter/NewsLetter';
import Blog from "../pages/Blog/Blog"
import TheTeam from "../pages/TheTeam/TheTeam";
import AboutUs from "../pages/AboutUs/AboutUs"
import ContactUs from "../pages/ContactUs/ContactUs"
import LoginIn from "../auth/login/login";
import SignUp from "../auth/signUp/signUp"
// import PrivateRoute from "../auth/PrivateRoute";
import NotFound from "../ErrorPages/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {path: "/", element: <Home/>},
            {path :"/Products", element:<Products/>},
            {path :"/Products/cleaning", element:<Cleaning/>},
            {path :"/SteerifyLens", element:<SteerifyLens/>},
            {path :"/SteerifyLens/Culture", element:<Culture/>},
            {path :"/SteerifyLens/NewsLetter", element : <NewsLetter/>},
            {path :"/SteerifyLens/Blog", element : <Blog/>},
            {path :"/SteerifyLens/TheTeam", element : <TheTeam/>},
            {path :"/SteerifyLens/AboutUs", element : <AboutUs/>},
            {path :"/ContactUs", element : <ContactUs/>},
            {path : "/signUp", element : <SignUp/>},
            {path : "/login", element : <LoginIn/>},
            // {path : "/", element : <PrivateRoute><Home/></PrivateRoute>},
            {path : "*", element : <NotFound/>},

        ],
    
    }
])

export default router