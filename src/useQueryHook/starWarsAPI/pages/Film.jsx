import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import './films.css'

const Film = () => {
    let params = useParams();
    const filmId = params.filmId;

    const {data: FilmData, status} = useQuery({
        queryKey: ['film', filmId],
        queryFn: async () => (await fetch(`https://swapi.dev/api/films/${filmId}`).then(res => (res.json())))
    })

    if(status === 'pending') {
        return (<p>Loading...</p>)
    }
    return (
        <div className="film-page height_100pr">
            <h1>{FilmData.title}</h1>
            <p className="film-description">{FilmData.opening_crawl}</p>
            <h2 className="film-director">Director: {FilmData.director}</h2>
            <h1>Characters:</h1>
            {FilmData.characters.map(char => {
                const characterUrlParts = char.split('/').filter(Boolean)
                const characterId = characterUrlParts[characterUrlParts.length - 1]
                return (<Character key={characterId} id={characterId} />)
            })}
        </div>
    );
};

function Character(props) {
    console.log(props)
    const {id} = props
    const {data, status} = useQuery({
        queryKey: ['character', id],
        queryFn: async () => await fetch(`https://swapi.dev/api/people/${id}`).then(res=>res.json()) 
    })

    if (status !== 'success') {
        return <p>Loading...</p>
    }
    console.log(data)
    return (
        <article className="film-plot" key={id}>
            <Link className="film-acrticle" to={`/characters/${id}`}>
                {data.name}
            </Link>
        </article>
    )
}

export default Film;
