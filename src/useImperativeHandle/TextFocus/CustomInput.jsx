import React, {useImperativeHandle} from "react";

const CustomInput = ({ ...props }, ref) => {
    useImperativeHandle(ref, () => {
        return {alertHi: () => alert('hi')}
    }, [])
    return (
        <input 
            {...props}
            style={{
                border: 'none',
                backgroundColor: 'lightpink',
                padding: '.25em',
                borderBottom: '.1em solid black',
                borderTopRightRadius: ".25em",
                borderTopLeftRadius: ".25em"
            }} 
        />
    );
};

export default React.forwardRef(CustomInput);
