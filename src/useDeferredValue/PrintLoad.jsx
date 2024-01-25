import React, { useMemo, useState, useDeferredValue } from "react";

const List = ({ input }) => {
    const LIST_SIZE = 20000;
    const deferedInput = useDeferredValue(input)
    const list = useMemo(() => {
        const l = []
        for (let i = 0; i < LIST_SIZE; i++) {
            l.push(<div key={i}>{deferedInput}</div>)
        }
        return l
    }, [deferedInput]);
    return list
}

const PrintLoad = () => {
    const [value, setValue] = useState('')
    
    const handleOnChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <>
            <input 
                type="text"
                value={value}
                onChange={handleOnChange}
            />
            <List input={value} />
        </>
    );
};

export default PrintLoad;
