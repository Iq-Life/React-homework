import React, {useState} from 'react'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

function Header() {
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const styleMenuBody = accordionCollapsed ? s.menuBody_active : s.menuBody

    /*`${s.menuBody} + ${s.menuBody_active}`*/
    return (
        <div className={s.headerMenu}>
            <div className={s.menuIcon} onClick={() => setAccordionCollapsed(!accordionCollapsed)}>
                <span/>
            </div>
            <nav className={styleMenuBody}>
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
            </nav>
        </div>
    )
}

export default Header
