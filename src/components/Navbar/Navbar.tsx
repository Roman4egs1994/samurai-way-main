import React from "react";
import styleN from './Navbar.module.css'
import {NavLink} from "react-router-dom";


export const Navbar = () => {
    return (

        <nav className={styleN.nav}>
            <div className={styleN.navBox}>
                <div>
                    <NavLink className={styleN.item} to="/profile"
                             activeClassName={styleN.activeLink}>Profile
                    </NavLink>
                </div>
                <div>
                    <NavLink className={styleN.item} to="/dialogs"
                             activeClassName={styleN.activeLink}>Messages
                    </NavLink>
                </div>
                <div>
                    <NavLink className={styleN.item} to="/news"
                             activeClassName={styleN.activeLink}>News
                    </NavLink>
                </div>
                <div>
                    <NavLink className={styleN.item} to="/music"
                             activeClassName={styleN.activeLink}>Music
                    </NavLink>
                </div>
                <div>
                    <NavLink className={styleN.item} to="/settings"
                             activeClassName={styleN.activeLink}>Settings
                    </NavLink>
                </div>
            </div>
        </nav>

    )
}