import React, { useState, useEffect } from "react";

const DataFetch = () => {
    const [resourse, setRouserses] = useState("posts");
    const [data, setData] = useState([]);
    console.log(data);

    useEffect(() => {
        const data = fetch(`https://jsonplaceholder.typicode.com/${resourse}`)
            .then((response) => response.json())
            .then((json) => setData(json));
    }, [resourse]);

    return (
        <>
            <div>
                <button onClick={() => setRouserses("posts")}>posts</button>
                <button onClick={() => setRouserses("users")}>users</button>
                <button onClick={() => setRouserses("comments")}>
                    comments
                </button>
            </div>
            <h1>{resourse}</h1>
            {data.map((item) => {
                return <pre>{JSON.stringify(item)}</pre>;
            })}
        </>
    );
};

export default DataFetch;
