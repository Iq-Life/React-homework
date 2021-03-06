import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperRadio.module.css'
import {ThemesType} from "../../../h12/bll/themeReducer";

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: ThemesType[] | string[]
    onChangeOption?: (option: string) => void
    onChangeCall?: (value: ThemesType) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChangeCall,
        onChange, onChangeOption,
        ...restProps
    }
) => {

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    const onClickHandler = (color: ThemesType) => {
        onChangeCall && onChangeCall(color)
    }

    const mappedOptions: any[] = options ? options.map((o, i) => (
        <label key={name + '-' + i} className={s.labelRadio}>
            <input
                className={s.checkRadio}
                type={'radio'}
                name={name}
                value={o}
                onChange={onChangeCallback}
                onClick={() => onClickHandler(o as ThemesType)}
                {...restProps}
            />
            {o}
        </label>
    )) : []


    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
