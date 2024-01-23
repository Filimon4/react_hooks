import React, {createContext, useContext, useState} from 'react'

const TestContext = createContext()

const Toggle = () => {
    const [dark, setDark] = useState(false)

    const toggleTheme = () => {
        setDark(!dark)
    }

    return (
        <TestContext.Provider value={dark}>
            <TestComponent/>
            <button
                onClick={toggleTheme}
            >
                Toggle
            </button>
        </TestContext.Provider>
    )
}


const TestComponent = () => {
    const dark = useContext(TestContext)

    return (
        <>
            <h1>Style: {String(dark)}</h1>
        </>
    )
}

export default Toggle