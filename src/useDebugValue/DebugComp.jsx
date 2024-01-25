import React, { useState, useDebugValue, useEffect } from "react";

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

    useDebugValue(value, v => getValueSlowly(v))

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value, key])

    return [value, setValue]
}

function getValueSlowly(value) {
    for(let i = 0; i < 3000000000; i++) {}
    return value
}

const DebugComp = () => {
    const [firstName, setFirstName] = useLocalStorage("firstName", "Kyle");
    const [lastName, setLastName] = useState("Cook");

   

    return (
        <>
            First:{" "}
            <input value={firstName} onChange={e => setFirstName(e.target.value)} />
            <br />
            Second:{" "}
            <input value={lastName} onChange={e => setLastName(e.target.value)} />
        </>
    );
};

export default DebugComp;
