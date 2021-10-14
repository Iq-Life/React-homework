import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'


const arr = ['x', 'y', 'z']

function HW7() {
    const [value, setValue] = useState<string>(arr[1])

    return (
        <div>
            <div>
                <SuperSelect
                    options={arr}
                    value={value}
                    onChangeOption={setValue}
                />
            </div>
            <div>
                <SuperRadio
                    name={'radio'}
                    options={arr}
                    value={value}
                    onChangeOption={setValue}

                />
            </div>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRadio/>*/}
        </div>
    )
}

export default HW7
