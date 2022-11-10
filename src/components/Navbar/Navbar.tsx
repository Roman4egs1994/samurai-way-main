import React from "react";
import  styleN from './Navbar.module.css'



export const Navbar = () => {
    return (
        <nav className={styleN.nav}>
            <div className='item'><a className={styleN.item} href="src/components/Navbar/Navbar">Profile</a></div>
            <div className='item'><a className={styleN.item} href="src/components/Navbar/Navbar">Messages</a></div>
            <div className='item'><a className={styleN.item} href="src/components/Navbar/Navbar">News</a></div>
            <div className='item'><a className={styleN.item} href="src/components/Navbar/Navbar">Music</a></div>
            <div className='item'><a className={styleN.item} href="src/components/Navbar/Navbar">Settings</a></div>
        </nav>
    )
}