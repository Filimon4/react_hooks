import React, {use} from "react";

const FetchData = ({url, shouldFetch}) => {

    let data = "default data";
    if (shouldFetch) {
        data = use(fetch(url).then(res => res.json()))
    }
        
    return (
        <>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    );
};

export default FetchData;
