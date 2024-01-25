import React, { useLayoutEffect, useRef, useState } from "react";

const MoveText = () => {
    const [show, setShow] = useState()
    const button = useRef()
    const text = useRef()

    useLayoutEffect(() => {
        if (text.current == null || button.current == null) return
        const { bottom } = button.current.getBoundingClientRect()
        text.current.style.top = `${bottom + 25}px`
    }, [show])
    
    return (
        <>
            <button ref={button} onClick={() => setShow(prev => !prev)}>Show text</button>
            {show && (
                <div style={{position: 'absolute'}} ref={text}>This is the text</div>
            )}
        </>
    );
};

export default MoveText;
