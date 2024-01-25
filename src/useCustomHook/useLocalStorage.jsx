import React, {useEffect, useState} from 'react';
import useUpdateLogger from './useUpdateLogger';

// hook part
function getSavedValue(key, initValue) {
    const savedValue =  JSON.parse(localStorage.getItem(key))
    if (savedValue) return savedValue
    if (initValue instanceof Function) return initValue()
    return initValue
}

function useLocalStorage(key, initValue) {
    const [value, setValue] = useState(() => {
        return getSavedValue(key, initValue)
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setValue]
}

// ui part

const SaveValues = () => {
    const [name, setName] = useLocalStorage('name', '')
    useUpdateLogger(name)

    return (
        <input 
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}
        />
    )
}

export default SaveValues