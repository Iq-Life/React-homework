import React from 'react'
import s from '../../../p1-main/m1-ui/u1-app/App.module.css'

function Error404() {
    return (
        <div className={s.errorPage}>
            <div style={{color: "red"}}>404</div>
            <div>Page not found!</div>
            <div className={s.errorCat}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    )
}

export default Error404
