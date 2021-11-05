import React from 'react'
import HW1 from '../../h1/HW1'
import HW2 from '../../h2/HW2'
import HW3 from '../../h3/HW3'
import HW4 from '../../h4/HW4'
import s from "../../../p1-main/m1-ui/u1-app/App.module.css";
import HW6 from "../../h6/HW6";

function PreJunior() {
    return (
        <div>
            <div className={s.title}><h2>PreJunior</h2></div>
            <ul className={s.ul}>
                <h4>Task #1</h4>
                <li><HW1/></li>
                <h4>Task #2 list</h4>
                <li><HW2/></li>
                <h4>Task #3 input</h4>
                <li><HW3/></li>
                <h4>Task #4</h4>
                <li><HW4/></li>
                <h4>Task #6</h4>
                <li><HW6/></li>
            </ul>
        </div>
    )
}

export default PreJunior

// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз