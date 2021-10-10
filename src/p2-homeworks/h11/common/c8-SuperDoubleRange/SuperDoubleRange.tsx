import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import s from "./SuperDoubleRange.module.css";

type SuperDoubleRangePropsType = {
    value2:number[]
    setValue2:(value : number[] )=>void
    // min, max, step, disable, ...
}

function valuetext(value: number) {
    return `${value}°C`;
}

const minDistance = 10;

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
         value2,setValue2
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки


    /*const [value1, setValue1] = React.useState<number[]>([20, 37]);*/

    const handleChange1 = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue2([Math.min(newValue[0], value2[1] - minDistance), value2[1]]);
        } else {
            setValue2([value2[0], Math.max(newValue[1], value2[0] + minDistance)]);
        }
    };

   /* const [value2, setValue2] = React.useState<number[]>([20, 37]);*/

    const handleChange2 = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (newValue[1] - newValue[0] < minDistance) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], 100 - minDistance);
                setValue2([clamped, clamped + minDistance]);
            } else {
                const clamped = Math.max(newValue[1], minDistance);
                setValue2([clamped - minDistance, clamped]);
            }
        } else {
            setValue2(newValue as number[]);
        }
    };

    return (
        <Box sx={{width: 300}}>
            <Slider
                getAriaLabel={() => 'Minimum distance'}
                value={value2}
                onChange={handleChange1}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                disableSwap
            />
            <div className={s.superDoubleRangeValue}><span>{value2[0]}</span><span>{value2[1]}</span></div>
            <Slider
                getAriaLabel={() => 'Minimum distance shift'}
                value={value2}
                onChange={handleChange2}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                disableSwap
            />
            <div className={s.superDoubleRangeValue}><span>{value2[0]}</span><span>{value2[1]}</span></div>
        </Box>
    );

}

export default SuperDoubleRange
