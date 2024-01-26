import React, { Suspense, useState } from "react";
import FetchData from "./FetchData";
import ErrorBoundary from "./ErrorBoundary";

const URLS = {
    USERS: "https://jsonplaceholder.typicode.com/users",
    POSTS: "https://jsonplaceholder.typicode.com/posts",
    COMMNETS: "https://jsonplaceholder.typicode.com/comments",
};

const Urls = () => {
    const [url, setUrl] = useState(URLS.USERS);
    
    return (
        <>
            <div >
                <form style={{
                    display: 'flex', flexDirection:'row', 
                    width: "100%", justifyContent:'center', 
                    fontSize: '1.2rem'
                }}  value={url} onChange={(e) => setUrl(e.target.value)}
                >
                    <label >
                        <input name="url" type="radio" value={URLS.USERS} checked={url === URLS.USERS} />
                        Users
                    </label>
                    <label>
                        <input name="url" type="radio" value={URLS.POSTS} checked={url === URLS.POSTS}/>
                        Posts
                    </label>
                    <label>
                        <input name="url" type="radio" value={URLS.COMMNETS} checked={url === URLS.COMMNETS}/>
                        Comments
                    </label>
                </form>
            </div>
            <ErrorBoundary fallback={<div>Error</div>} >
                <Suspense fallback={<div>Loading...</div>}>
                    <FetchData url={url} shouldFetch/>
                </Suspense>
            </ErrorBoundary>

        </>
    );
};

export default Urls;
