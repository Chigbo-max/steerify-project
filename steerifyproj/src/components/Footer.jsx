// import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import FooterLogo from "../assets/steerifyNewLogo.png";
import { Link } from "react-router-dom";
import "../styles/Footer.css";



// import {faLocationDot} from '@fortawesome/free-solid-svg-icons';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// import InstagramIcon from '@material-ui/icons/Instagram';
// import FacebookIcon from '@material-ui/icons/Facebook';



function Footer() {
    return (
        <div className="footer">
            <div className="leftSideFooter">
                <img src={FooterLogo}/>
            </div>
            <div className="rightSideFooter">
                <div className="threeOptions">
                    <Link to = "/Business"><h3>Business</h3></Link>
                    <Link to = "/Contact"><h3>Contact us</h3></Link>
                    <Link to = "/About"><h3>About Steerify</h3></Link>
                </div>
                <div id="line"></div>
                <div className="address">
                    <div className="location">
                        <div className="LocationIcon">
                            <LocationOnIcon />
                            <h5>Lagos</h5>
                        </div>
                        <p>Plot 9, Dr. Nurudeen Olowopopo Avenue, Central Business District, Alausa 100212, Ikeja, Lagos, Nigeria</p>
                        <p>Over 24 physical branches across the nation.
                        </p>
                        <p>&copy; 2025 Steerify. All Rights Reserved.</p>


                        {/* <FontAwesomeIcon className = "locationSymbol" icon ={faLocationDot}/> */}
                    </div>
                    <div className="contact">
                        <p>contact with us</p>
                        <p>hello@steerify.com</p>

                        <div className="socials">
                            <div className="instagram">
                            <Link to ="/"><FontAwesomeIcon icon={faInstagram} style={{color:"#2aa006"}}/></Link>
                            </div>
                            <div className="facebook">
                                <Link to = "/"><FontAwesomeIcon icon={faFacebook}style={{color:"#2aa006"}} /> </Link>
                                </div>
                            <div className="twitter">
                            <Link to = "/"><FontAwesomeIcon icon={faSquareXTwitter} style={{color:"#2aa006"}}/> </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer