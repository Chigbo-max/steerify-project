import React from 'react'
import Style from "../styles/Products.module.css"
import laundry from "../assets/steerifyLaundry.png"
import { useNavigate } from 'react-router-dom'

function LatestRelease() {
    const navigate = useNavigate();
    return (
        <div className={Style.release}>
            <div className={Style.releaseTextContent}>
                <p>WHAT'S NEW</p>
                <h3>Discover our <span>Latest Release</span></h3>
            </div>
            <div className ={Style.readAndPodcast}>
            <div className={Style.latestRead}>
                <div className= {Style.latestReadLeftSide}>
                    <img src={laundry}/>
                </div>
                <div className={Style.latestReadRightSide}>
                    <h4>Fast and Secured Laundry Service</h4>
                    <h5>How to be a good leader</h5>
                    <p>Leadership is a skill that can be learned. Here are some tips on how to be a good leader.</p>
                    <button onClick= {()=>navigate("/knowledgeHub/listen")}>VIEW SERIES &rarr;</button>
                    <p>A CPN INITIATIVE</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default LatestRelease
