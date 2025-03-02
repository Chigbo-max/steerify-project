import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home/Home";
import Business from "../pages/Business/Business";
import StartUp from "../pages/StartUp/StartUp";
import ExistingBusiness from "../pages/ExistingBusiness/ExistingBusiness";
import Investors from "../pages/Investor/Investors";
import SteerifyLens from "../pages/SteerifyLens/SteerifyLens";
import Culture from "../pages/Culture/Culture";
import NewsLetter from '../pages/NewsLetter/NewsLetter';
import Blog from "../pages/Blog/Blog"
import TheTeam from "../pages/TheTeam/TheTeam";
import AboutUs from "../pages/AboutUs/AboutUs"
import ContactUs from "../pages/ContactUs/ContactUs"
import LoginIn from "../auth/login/login";
import SignUp from "../auth/signUp/signUp"
import PrivateRoute from "../auth/PrivateRoute";


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
            {path : "/", element : <PrivateRoute><Home/></PrivateRoute>}
        ],
    
    }
])

export default router