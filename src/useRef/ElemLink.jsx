import React, {useState, useRef, useEffect} from 'react'

const ElemLink = () => {
    const [name, setName] = useState('')
    const prevName = useRef('')

    useEffect(() => {
        prevName.current = name
    }, [name])

    return (
        <>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <div>My name is {name}, and my prev name is {prevName.current}</div>
        </>
    )
}

export default ElemLink