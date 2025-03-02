import React from 'react'
import { navBarItems } from '../../helpers/NavBarItems.jsx'
import { Link } from "react-router-dom"
import Logo from "../../assets/steerifyNewLogo.png"
import style from "./NavBar.module.css"
import DropDown from "../../components/DropDown.jsx"
import BusinessDropDown from "../../components/BuisnessDropDown.jsx"
import { LiaAngleDownSolid,LiaBarsSolid} from "react-icons/lia";
import {useDispatch, useSelector} from "react-redux"
import { setDropDown, setOpenLink, setBusinessDropDown} from '../../app/navBar/navBarSlice.jsx'
import {useNavigate} from "react-router-dom";


function NavBar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { openLink, dropDown, businessDropDown } = useSelector((state) => state.navBar);

    function toggleBar() {
        dispatch(setOpenLink(!openLink));
    }

    return (
        <nav>   
            <div className={style.navBar}>
                <div className={style.logo}>
                    <Link to="/"><img src={Logo} /></Link>
                </div>
                <div>
                    <ul className={`${style.navBarOptions} ${openLink ? style.open : ''}`}>
                        {navBarItems.map((item) => {
                            if (item.title === "Steerify Lens") {
                                return (
                                    <li key={item.id} className={item.cName}
                                        onMouseEnter={() => dispatch(setDropDown(true))}
                                        onMouseLeave={() => dispatch(setDropDown(false))}>
                                        <Link to={item.path}>{item.title} <LiaAngleDownSolid/></Link>
                                        {dropDown && <DropDown />}
                                    </li>
                                );
                            }

                            if (item.title === "Business") {
                                return (
                                    <li key={item.id} className={item.cName}
                                        onMouseEnter={() => dispatch(setBusinessDropDown(true))}
                                        onMouseLeave={() => dispatch(setBusinessDropDown(false))}>
                                        <Link to={item.path}>{item.title} <LiaAngleDownSolid/></Link>
                                        {businessDropDown && <BusinessDropDown/>}
                                    </li>
                                );
                            }

                            return (
                                <li key={item.id} className={item.cName}>
                                    <div className={style.displayItems}>
                                        <Link to={item.path}>{item.title}{item.title === "Steerify Lens" ? <LiaAngleDownSolid/> : ""}</Link>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className={style.signUpButton}>
                    <button onClick={() => navigate("/signUp")}>Sign Up</button>
                </div>
                <div onClick={toggleBar} className={style.hiddenButton}>
                    <button><LiaBarsSolid/></button>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;

