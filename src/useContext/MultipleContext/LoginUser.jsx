import React, {createContext, useContext, useState} from 'react'
import './loginUser.css'

const ThemeContext = createContext()
const CurrentUserContext = createContext()

const LoginUser = () => {
    const [theme, setTheme] = useState('light')
    const [currentUser, setCurrentUser] = useState(null)

    return (
        <ThemeContext.Provider value={theme}>
            <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
                <LoginPaner />
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


const LoginPaner = () => {
    const {currentUser} = useContext(CurrentUserContext)
    console.log(currentUser)

    return (
        <>
            <Panel title="Login" >
                {currentUser !== null ?
                    <Greeting />
                    :
                    <Login />
                }
            </Panel>
        </>
    )
}

const Panel = ({title, children}) => {
    const theme = useContext(ThemeContext)

    return (
        <section className={`plane plane-${theme}`}>
            <h1>{title}</h1>
            {children}
        </section>
    )
}

const Login = () => {
    const {setCurrentUser} = useContext(CurrentUserContext)
    const [firstName, setFirstName] = useState('')
    const [secondName, setSecondName] = useState('')
    const canlogin = firstName.trim() !== '' && secondName.trim() !== ''
    
    return (
        <>
            <label>
                First name{': '}
                <input 
                    required
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
            </label>
            <label>
                Second name{': '}
                <input 
                    required
                    value={secondName}
                    onChange={e => setSecondName(e.target.value)}
                />
            </label>
            <div>
                <Button
                    disabled={!canlogin}
                    onClick={() => {
                        setCurrentUser(firstName + ' ' + secondName)
                    }}
                    >
                    Log in 
                </Button>
                {!canlogin && <i>Fill in both fields.</i>}
            </div>
        </>
    )
}

const Button = ({disabled, onClick, children}) => {
    const theme = useContext(ThemeContext)
    return (
        <button
            className={`button ${"button-" + theme} `}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

const Greeting = () => {
    const {currentUser} = useContext(CurrentUserContext)

    return (
        <p>You logged in as {currentUser}</p>
    )
}
 
export default LoginUser