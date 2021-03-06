import React from 'react'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";


function Header() {

    return (<div style={{display: "flex", justifyContent: "flex-end"}}>
            <div className={s.headerMenu}>
                <div className={s.block}/>
                <ul className={s.list}>
                    <li>
                        <NavLink to='/pre-junior' activeClassName={s.activeLink} className={s.link}>Pre_Junior</NavLink>
                    </li>
                    <li>
                        <NavLink to='/junior' activeClassName={s.activeLink} className={s.link}>Junior</NavLink>
                    </li>
                    <li>
                        <NavLink to='/junior-plus' activeClassName={s.activeLink} className={s.link}>Junior+</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
