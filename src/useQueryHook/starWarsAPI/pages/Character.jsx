import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

const Character = () => {
    let params = useParams()
    console.log(params)
    const characterId = params.charactersId
    const {data, status} = useQuery({
        queryKey: ['character', characterId],
        queryFn: async () => (await fetch(`https://swapi.dev/api/people/${characterId}`).then(res => res.json())),
    })

    if (status !== 'success') {
        return <p>Loading...</p>
    }

    console.log(data)
    return (
        <div>
            <h1>{data.name}</h1>
            <table>
                <tr>
                    <th>Feature</th>
                    <th>Value</th>
                </tr>
                <tr>
                    <td>Born</td>
                    <td>{data.birth_year}</td>
                </tr>
                <tr>
                    <td>Eyes</td>
                    <td>{data.eye_color}</td>
                </tr>
                <tr>
                    <td>Hair</td>
                    <td>{data.hair_color}</td>
                </tr>
                <tr>
                    <td>Height</td>
                    <td>{data.height}</td>
                </tr>
                <tr>
                    <td>Mass</td>
                    <td>{data.mass  }</td>
                </tr>
                <tr>
                    <td>Homeworld</td>
                    <td><HomeWorld id={data.homeworld} /></td>
                </tr>
            </table>
            <h1>Films</h1>
            {data.films.map(film => {
                const filmUrlParts = film.split('/').filter(Boolean)
                const filmId = filmUrlParts[filmUrlParts.length - 1]
                return <Film key={`Film-${filmId}`} id={filmId} />
            })}
        </div>
    )
}

function Film({id}) {
    const {data, status} = useQuery({
        queryKey:['film', id],
        queryFn: async () => (await fetch(`https://swapi.dev/api/films/${id}/`).then(res=>res.json()))
    })

    if (status !== "success") {
        return <p>Loading...</p>
    }

    return (
        <article key={id}>
            <Link to={`/films/${id}`}>
                {data.episode_id}. {data.title}
            </Link>
        </article>
    )
}

function HomeWorld({ id }) {
    const {data, status} = useQuery({
        queryKey: ['homeworld', id],
        queryFn: async () => (await fetch(id).then(res=> res.json()))
    })

    if (status !== 'success') {
        return null
    }

    return data.name
}

export default Character