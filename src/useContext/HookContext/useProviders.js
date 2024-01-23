import React, { useState, createContext,useContext } from 'react';

export const ThemeContext = createContext()
export const CurrentUserContext = createContext()

export const useTheme = () => {
    
    return useContext(ThemeContext)
}

export const useCurrentUser = () => {
    const user = useContext(CurrentUserContext)
    if (user === undefined) {
        throw new Error("useCurrentUser must be used with Provider")
    }
    return user
}

export const Providers = ({ children }) => {
    const [theme, setTheme] = useState('light')
    const [currentUser, setCurrentUser] = useState(null)

    return (
        <ThemeContext.Provider value={theme}>
            <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
                {children}
                <label>
                    <input
                        type="checkbox"
                        checked={theme === 'dark'}
                        onChange={(e) => {
                            setTheme(e.target.checked ? 'dark' : 'light')
                        }}
                    />
                    Dark mode
                </label>
            </CurrentUserContext.Provider>
        </ThemeContext.Provider>
    )
}