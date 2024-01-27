import React, {useState} from 'react'
import { Providers, useTheme, useCurrentUser } from './useProviders'
import './loginUser.css'


const HookLogin = () => {

    return (
        <Providers>
            <LoginPaner/>
        </Providers>
    )
}



const LoginPaner = () => {
    const {currentUser} = useCurrentUser()

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
    const theme = useTheme()

    return (
        <section className={`plane plane-${theme}`}>
            <h1>{title}</h1>
            {children}
        </section>
    )
}

const Login = () => {
    const {setCurrentUser} = useCurrentUser()
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
    const theme = useTheme()
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
    const {currentUser} = useCurrentUser()

    return (
        <p>You logged in as {currentUser}</p>
    )
}
 
export default HookLogin