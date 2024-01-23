import React, {createContext, useContext, useState} from 'react'

const TestContext = createContext()

const ToggleCombine = () => {
    const [dark, setDark] = useState(false)

    const toggleTheme = () => {
        setDark(!dark)
    }

    return (
        <TestContext.Provider value={{dark, toggleTheme}}>
            <TestComponent/>
        </TestContext.Provider>
    )
}


const TestComponent = () => {
    const {dark, toggleTheme} = useContext(TestContext)
    

    return (
        <>
            <h1>Style: {String(dark)}</h1>
            <button onClick={toggleTheme}>Toggle</button>
        </>
    )
}

export default ToggleCombine