import React from 'react'
import HW1 from '../../h1/HW1'
import HW2 from '../../h2/HW2'
import HW3 from '../../h3/HW3'
import HW4 from '../../h4/HW4'
import s from "../../../p1-main/m1-ui/u1-app/App.module.css";

function PreJunior() {
    return (
        <div>
            <div className={s.title}><h2>PreJunior</h2></div>
            <ul className={s.ul}>
                <h2>Homework #1</h2>
                <li><HW1/></li>
                <h2>Homework #2</h2>
                <li><HW2/></li>
                <h2>Homework #3</h2>
                <li><HW3/></li>
                <h2>Homework #4</h2>
                <li><HW4/></li>
                <h2>Homework #5</h2>
                {/*<li><HW5/></li>*/}
            </ul>
            {/*<HW6/>*/}

        </div>
    )
}

export default PreJunior

// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз