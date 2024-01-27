import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Star Wars API</h1>
            <p>
                Using the{" "}
                <a href={"https://swapi.dev/documentation"}>Star Wars API</a>
            </p>
            <h3>Do you want to use the API</h3>
            <p>Check out <Link to="films">Films</Link> and <Link to="characters">Characters</Link></p>
        </div>
    );
};

export default Home;
