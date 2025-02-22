

import React from "react";
import Style from "../styles/Features.module.css";
import {Link} from "react-router-dom"
import banner from "../assets/steerifyBanner.png";
import { useNavigate } from "react-router-dom";
import { FaUsers, FaBook, FaCalendarAlt } from "react-icons/fa";
import {motion} from "framer-motion";

const Features = () => {

  const navigate = useNavigate();


  return (
    <section className={Style.features}>
      <div className={Style.feature_cards}>
        <div 
          className={Style.imageContainer}
        ><img src={banner} /></div>
        <div className={Style.textContainer}>
          <h5>ABOUT STEERIFY</h5>
          <h2>Steering Success <span>Through Connections</span></h2>
          <p>
            Steerify is a service-matching platform that connects customers with businesses. Our goal
            is to create value for both parties by providing a platform that is easy to use and
            navigate. We are committed to helping businesses grow and customers find the best
            products and services.
          </p>
          <div className= {Style.about_button}>
          <Link to ="/insideCPN/about">LEARN MORE &rarr;</Link>
          </div>
        </div>
      </div>
      <div className={Style.threeFeatures}>
        <div className={Style.threeFeaturesBox} onClick ={()=>navigate("/community")} >
        <motion.div 
            className={Style.featureIcon}
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
          >
        <FaUsers />
        </motion.div>
          <h3>Community</h3>
          <p>Find resources to equip and conect your community.</p>
        </div>
        <div className={Style.threeFeaturesBox} onClick ={()=>navigate("/knowledgeHub")} >
          <motion.div 
            className={Style.featureIcon} 
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
          >
          
          <FaBook/>
          </motion.div>
          <h3>Knowledge Hub</h3>
          <p>Explore our free biblically-aligned resources.</p>
        </div>
        <div className={Style.threeFeaturesBox} onClick ={()=>navigate("/events")} >
        <motion.div 
            className={Style.featureIcon}
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
          >
        <FaCalendarAlt/>
        </motion.div>
          <h3>Events</h3>
          <p>Engage with passionate Christian professionals.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
