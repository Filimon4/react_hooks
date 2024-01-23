import React, {useCallback, useEffect, useState} from "react";

const FibList = () => {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState()
    
    const theme = {
        backgroundColor: dark ? '#333' : '#FFF',
        color: dark ? "#FFF" : '#333'
    }

    const getItems = useCallback(() => {
        return [number, (+(number) + 1), (number*2+1)]
    }, [number])

    return (
        <div style={theme}>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />
            <button onClick={() => setDark(!dark)}>Toggle</button>
            <List getItems={getItems}/>
        </div>
    );
};

const List = ({getItems}) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(getItems())
        console.log('Update')
    }, [getItems])

    return (
        <>
            {items.map((n,i) => 
                <p key={i}>{n}</p>    
            )}
        </>
    );
};

export default FibList;
