import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Link } from 'react-router-dom'

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
        <div>
            <h1>Films</h1>
            {FilmsData.results.map((film, i) => {
                const filmUrlParts = film.url.split('/').filter(Boolean)
                const filmId = filmUrlParts[filmUrlParts.length - 1]
                return (
                    <div>
                        <aricle key={i}>
                            <Link to={`/films/${filmId}`}>
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