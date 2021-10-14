import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import './SuperRadio.css'
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

   /* const onClickHandler = (color: ThemesType) => {
        onChangeCall && onChangeCall(color)
    }*/


    const mappedOptions: any[] = options ? options.map((o, i) => (
        <label className={'labelRadio'} key={name + '-' + i}>
            <input
                className={'checkRadio'}
                type={'radio'}
                name={name}
                checked={o === value}
                value={o}
                onChange={onChangeCallback}
                /*onClick={() => onClickHandler(o as ThemesType)}*/
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
