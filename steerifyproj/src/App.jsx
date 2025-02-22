import './App.css'
// import NavBar from "./components/NavBar";
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import Home from "./pages/Home";
// import Business from "./pages/Business";
// import StartUp from "./pages/StartUp";
// import ExistingBusiness from "./pages/ExistingBusiness";
// import Investors from "./pages/Investors";
// import SteerifyLens from "./pages/SteerifyLens";
// import Culture from "./pages/Culture";
// import NewsLetter from './pages/NewsLetter';
// import Blog from "./pages/Blog"
// import TheTeam from "./pages/TheTeam";
// import AboutUs from "./pages/AboutUs"
// import ContactUs from "./pages/ContactUs"
// import Footer from "./components/Footer";

import { RouterProvider } from 'react-router-dom'
import router from "./router/routes.jsx"


function App() {

  return (
    
    <div className="App">
      <RouterProvider router = {router}
       future={{
        v7_startTransition: true,
      }}/>
     
   
    </div>
    
  )
}

export default App
