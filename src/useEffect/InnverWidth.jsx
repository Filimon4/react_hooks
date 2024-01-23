import React, {useEffect, useState} from "react";

const InnverWidth = () => {
    const [innerSize, setInnerSize] = useState({x: window.innerWidth, y: window.innerHeight});

    const handleResize = () => {
        setInnerSize({x: window.innerWidth, y: window.innerHeight})
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])
    
    return (<>
        <div>
            <h1>
                {innerSize.x} x {innerSize.y}
            </h1>
        </div>
    </>);
};

export default InnverWidth;
