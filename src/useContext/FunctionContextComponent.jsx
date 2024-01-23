import React from "react";
import { useTheme, useThemeUpdate } from "./useThemeProvider";

const FunctionContextComponent = () => {
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()
    const ThemeStyle = {
        backgroundColor: darkTheme ? "#333" : "#CCC",
        color: darkTheme ? "#CCC" : "#333",
        padding: "2rem",
        margin: "2rem"
    }

    return (
        <>
            <button onClick={toggleTheme}>Toggle theme</button>
            <div style={ThemeStyle}>FunctionContextComponent</div>
        </>
    );
};

export default FunctionContextComponent;
