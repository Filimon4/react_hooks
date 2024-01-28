import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Link } from 'react-router-dom'
import './films.css'

const Films = () => {
    const {data: FilmsData, status, error} = useQuery({
        queryKey: ['films'],
        queryFn: async () => (await fetch("https://swapi.dev/api/films/").then(res => res.json()))
    })

    if (status === 'pending') {
        return <p>Loading...</p>
    }

    console.log(FilmsData)
    return (
        <div className='film-page'>
            <h1 className="film-title">Films</h1>
            {FilmsData.results.map((film, i) => {
                const filmUrlParts = film.url.split('/').filter(Boolean)
                const filmId = filmUrlParts[filmUrlParts.length - 1]
                return (
                    <div className="film-plot">
                        <aricle key={i}>
                            <Link className="film-acrticle" to={`/films/${filmId}`}>
                                {film.episode_id}. {film.title}{' '}
                                <em>({new Date(Date.parse(film.release_date)).getFullYear()})</em>
                            </Link>
                        </aricle>
                    </div>
                )
            })}
        </div>
    )
}

export default Films