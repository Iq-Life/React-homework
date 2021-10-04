import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
    title:string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        red, className, title,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {

    const finalClassNameButton = `${red ? s.red : s.button} ${className}`
    const finalClassNameSpanTop= red ? `${s.red_button_line_top} ${s.red_button_line}` : `${s.button_line_top} ${s.button_line}`
    const finalClassNameSpanRight= red ? `${s.red_button_line_right} ${s.red_button_line}` : `${s.button_line_right} ${s.button_line}`
    const finalClassNameSpanBottom= red ? `${s.red_button_line_bottom} ${s.red_button_line}` : `${s.button_line_bottom} ${s.button_line}`
    const finalClassNameSpanLeft= red ? `${s.red_button_line_left} ${s.red_button_line}` : `${s.button_line_left} ${s.button_line}`


    return (
        <button className={finalClassNameButton}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        >
            <span className={finalClassNameSpanTop}/>
            <span className={finalClassNameSpanRight}/>
            <span className={finalClassNameSpanBottom}/>
            <span className={finalClassNameSpanLeft}/>
            {title}
        </button>
    )
}

export default SuperButton
