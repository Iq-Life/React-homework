import React from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: React.ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    resetError: () => void
    onEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, resetError, onEnter}
) => {

    const inputClass = !!error ? s.errorInput : s.input

    return (
        <div>
            <div className={s.errorText}><span>{error}</span></div>
            <input
                value={name}
                className={inputClass}
                onChange={setNameCallback}
                onKeyPress={onEnter}
                onFocus={resetError}
            />
            <button onClick={addUser} className={s.button} disabled={(!!error)}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
