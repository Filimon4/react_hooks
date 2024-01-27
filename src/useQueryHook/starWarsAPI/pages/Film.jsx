import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

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
    console.log(FilmData)
    return (
        <div>
            <h1>{FilmData.title}</h1>
            <p>{FilmData.opening_crawl}</p>
            <h2>Director: {FilmData.director}</h2>
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
        <article key={id}>
            <Link to={`/characters/${id}`}>
                {data.name}
            </Link>
        </article>
    )
}

export default Film;
