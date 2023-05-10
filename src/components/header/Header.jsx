

import React, { useState, useEffect } from "react";
import  HiOutlineSearch  from "./search1.gif"
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";
import "./style.scss";

import ContentWrapper from "../ContentWrapper/ContentWrapper";
import logo from "../../assets/movix-logo.svg";

const Header = () => {
    const [show, setShow] = useState("top");

    const [mobileMenu, setMobileMenu] = useState(false);

    const navigate = useNavigate();



    const openMobileMenu = () => {
        setMobileMenu(true);
    };

    
    return (
        <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
            <ContentWrapper>
                <div className="logo" onClick={() => navigate("/")}>
                    <img src={logo} alt="" />
                </div>
                <ul className="menuItems">
                    <li
                        className="menuItem"
                        onClick={() => navigate("/")}
                    >
                        Movies
                    </li>
                    <li className="menuItem"       onClick={() => navigate("/")} >
                        Tv Shows
                    </li>
                
                </ul>

                <div className="mobileMenuItems">

                    {mobileMenu ? (
                        <VscChromeClose onClick={() => setMobileMenu(false)} />
                    ) : (
                      <CgMenuRight onClick={openMobileMenu } />
                    )}
                </div>
            </ContentWrapper>
            
        </header>
    );
};

export default Header;