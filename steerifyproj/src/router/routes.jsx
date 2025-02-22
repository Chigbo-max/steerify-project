import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Business from "../pages/Business";
import StartUp from "../pages/StartUp";
import ExistingBusiness from "../pages/ExistingBusiness";
import Investors from "../pages/Investors";
import SteerifyLens from "../pages/SteerifyLens";
import Culture from "../pages/Culture";
import NewsLetter from '../pages/NewsLetter';
import Blog from "../pages/Blog"
import TheTeam from "../pages/TheTeam";
import AboutUs from "../pages/AboutUs"
import ContactUs from "../pages/ContactUs"
import LoginIn from "../auth/login/login";
import SignUp from "../auth/signUp/signUp"


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {path: "/", element: <Home/>},
            {path :"/Business", element:<Business/>},
            {path :"/Business/start-up", element:<StartUp/>},
            {path :"/Business/existing-business", element:<ExistingBusiness/>},
            {path :"/Business/investors", element:<Investors/>},
            {path :"/SteerifyLens", element:<SteerifyLens/>},
            {path :"/SteerifyLens/Culture", element:<Culture/>},
            {path :"/SteerifyLens/NewsLetter", element : <NewsLetter/>},
            {path :"/SteerifyLens/Blog", element : <Blog/>},
            {path :"/SteerifyLens/TheTeam", element : <TheTeam/>},
            {path :"/SteerifyLens/AboutUs", element : <AboutUs/>},
            {path :"/ContactUs", element : <ContactUs/>},
            {path : "/signUp", element : <SignUp/>},
            {path : "/login", element : <LoginIn/>},
        ],
    
    }
])

export default router