import React from 'react'
import s from "../../../p1-main/m1-ui/u1-app/App.module.css";
import HW7 from "../../h7/HW7";
import HW8 from "../../h8/HW8";
import HW9 from "../../h9/HW9";
import HW10 from "../../h10/HW10";
import HW11 from "../../h11/HW11";

function Junior() {
    return (
        <div>
            <div className={s.title}><h2>Junior</h2></div>
            <ul className={s.ul}>
                <h4>Homework #7</h4>
                <li><HW7/></li>
                <h4>Homework #8</h4>
                <li><HW8/></li>
                <h4>Homework #9</h4>
                <li><HW9/></li>
                <h4>Homework #10</h4>
                <li><HW10/></li>
                <h4>Homework #11</h4>
                <li><HW11/></li>


            </ul>
        </div>
    )
}

export default Junior