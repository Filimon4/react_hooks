import React, { useState, useTransition } from "react";

const PrintF = () => {
    const [isPending, startTransition] = useTransition()
    const [input, setInput] = useState('')
    const [list, setList] = useState([])
    
    const LIST_SIZE = 10000

    function handleChange(e) {
        setInput(e.target.value)
        startTransition(() => {
            const l = []
            for (let i = 0; i < LIST_SIZE; i++) {
                l.push(e.target.value)
            }
            setList(l)
        })
    }

    return (
        <>
            <input input="text" value={input} onChange={handleChange} />
            {isPending ? <h1>Loading...</h1> : list.map((item, index) => {
                return <div key={index}>{item}</div>
            })}
        </>
    );
};

export default PrintF;
