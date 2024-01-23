import React, {useState, useMemo} from 'react'

const ThemeStyle = () => {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)
    const doubleNumber = useMemo(() => slowFunction(number), [number])
    const themeStyle = {
        backgroundColor: dark ? "black" : 'white',
        color: dark ? "white" : "black",
    }

    function slowFunction(number) {
        for (let i = 0; i < 1000000000; i++) {}
        return number * 2
    }
    
    return (
        <div style={{display: "flex", flexDirection: "column", width: "200px"}}>
            <input type="number" value={number} onChange={(e) => setNumber(+(e.target.value))}/>
            <button onClick={() => setDark(!dark)}>Change Theme</button>
            <div style={themeStyle}>{doubleNumber}</div>
        </div>
    )
}

export default ThemeStyle