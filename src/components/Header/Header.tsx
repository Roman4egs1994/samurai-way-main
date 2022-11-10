import React from "react";
import logo from "./imgHeader/logo.png";
import styleH from './Header.module.css'

export const Header = () => {
    return (
        <header className={styleH.header}>
            <img className={styleH.logotype} src={logo} alt="logo"/>
        </header>
    )
}