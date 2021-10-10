import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState<number[]>([0, 100])

    return (
        <div>
                <SuperRange
                    // сделать так чтоб value1 изменялось
                    setValue={setValue1}
                    value1={value1}
                />
                <SuperDoubleRange
                    value2={value2}
                    setValue2={setValue2}
                    // сделать так чтоб value1 и value2 изменялось
                />
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
        </div>
    )
}

export default HW11
