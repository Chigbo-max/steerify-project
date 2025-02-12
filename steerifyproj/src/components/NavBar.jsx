import React from 'react'
import { navBarItems } from '../helpers/NavBarItems'
import { Link } from "react-router-dom"
import Logo from "../assets/steerifyNewLogo.png"
import style from "../styles/NavBar.module.css"
import DropDown from "./DropDown.jsx"
import BusinessDropDown from "./BuisnessDropDown.jsx"
import { LiaAngleDownSolid,LiaBarsSolid} from "react-icons/lia";
import {useState} from "react";


function NavBar() {

    const[dropDown, setDropDown] = useState(false);
    const[openLink, setOpenLink] = useState(false);
    const[businessDropDown, setBusinessDropDown] = useState(false);

    function toggleBar(){
        setOpenLink(!openLink)
    }

    return (

        
        <nav>   
           <div className={style.navBar}>
            <div className={style.logo}>
               <Link to = "/"> <img src={Logo} /> </Link>
            </div>
            <div >
                <ul className={`${style.navBarOptions} ${openLink ? style.open : ''}`}>
                {navBarItems.map((item)=>{

                    if(item.title === "Steerify Lens"){
                        return (
                            
                            <li key={item.id} className = {item.cName}
                            onMouseEnter ={()=>setDropDown(true)}
                            onMouseLeave = {()=>setDropDown(false)}>
                            <Link to={item.path}>{item.title}<LiaAngleDownSolid/></Link>
                            {dropDown && <DropDown />}
                            </li>
                             )
                    }


                    if(item.title === "Business"){
                        return (
                            <li key={item.id} className = {item.cName}
                            onMouseEnter ={()=>setBusinessDropDown(true)}
                            onMouseLeave = {()=>setBusinessDropDown(false)}>
                                <Link to={item.path}>{item.title}<LiaAngleDownSolid/></Link>
                                {businessDropDown && <BusinessDropDown/>}
                            </li>
                        )
                    }

                return (
                    <li key={item.id} className = {item.cName}>
                        <div className={style.displayItems}>
                        <Link to={item.path}>{item.title}{item.title === "Steerify Lens" ? <LiaAngleDownSolid/> : ""}</Link>
                        </div>
                        
                    </li>
                )
            
                })}
                </ul>
                
            </div>
            <div className={style.signUpButton}>
            <button>Sign Up</button>
            </div>
            <div onClick = {toggleBar}className={style.hiddenButton}>
            <button><LiaBarsSolid/></button>
            </div>
        </div>
        </nav>
                


        
    )
}

export default NavBar
