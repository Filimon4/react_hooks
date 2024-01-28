import React from "react";
import { Link } from "react-router-dom";
import "./home.css"

const Home = () => {
    return (
        <div className="home-page">
            <h1 className="home-title">Star Wars API</h1>
            <p>
                Using the{" "}
                <a href={"https://swapi.dev/documentation"}>Star Wars API</a>
            </p>
            <h3 className="home-api">Do you want to use the API</h3>
            <p>Check out <Link to="films">Films</Link> and <Link to="characters">Characters</Link></p>
        </div>
    );
};

export default Home;
