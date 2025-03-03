import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import FooterLogo from "../../assets/steerifyNewLogo.png";
import { Link } from "react-router-dom";
import style from "./footer.module.css";



// import {faLocationDot} from '@fortawesome/free-solid-svg-icons';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// import InstagramIcon from '@material-ui/icons/Instagram';
// import FacebookIcon from '@material-ui/icons/Facebook';

const links = [{ title: "Business", path:"/Business"
},
{ title: "Contact us", path:"/Contact"
},
{ title: "About Steerify", path:"/About"
}
]

function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.leftSideFooter}>
                <img src={FooterLogo}/>
            </div>
            <div className={style.rightSideFooter}>
{links.map((list, index)=>{
                return(<div  key ={index} className={style.threeOptions}>
                    <Link to = {list.path}><h3>{list.title}</h3></Link>
    
                </div>
                )})}
                <div id="line"></div>
                <div className={style.address}>
                    <div className={style.location}>
                        <div className={style.LocationIcon}>
                            <LocationOnIcon />
                            <h5>Lagos</h5>
                        </div>
                        <p>Plot 9, Dr. Nurudeen Olowopopo Avenue, Central Business District, Alausa 100212, Ikeja, Lagos, Nigeria</p>
                        <p>Over 24 physical branches across the nation.
                        </p>
                        <p>&copy; 2025 Steerify. All Rights Reserved.</p>


                        {/* <FontAwesomeIcon className = "locationSymbol" icon ={faLocationDot}/> */}
                    </div>
                    <div className={style.contact}>
                        <p>contact with us</p>
                        <p>hello@steerifygroup.com</p>

                        <div className={style.socials}>
                            <div className={style.instagram}>
                            <Link to ="/"><FontAwesomeIcon icon={faInstagram} style={{color:"#2aa006"}}/></Link>
                            </div>
                            <div className={style.facebook}>
                                <Link to = "/"><FontAwesomeIcon icon={faFacebook}style={{color:"#2aa006"}} /> </Link>
                                </div>
                            <div className={style.twitter}>
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