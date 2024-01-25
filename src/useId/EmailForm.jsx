import React, {useId} from 'react'

const EmailForm = () => {
    const id = useId()
    return (
        <>
            <label htmlFor={id} >Email</label>
            <input id={id} type="email" />
        </>
     )
}

export default EmailForm