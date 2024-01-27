import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Link } from 'react-router-dom'

const Characters = () => {
    const {data: CharsData, status} = useQuery({
        queryKey: ['characters'],
        queryFn: async () => (await fetch("https://swapi.dev/api/people").then(res => res.json()))
    })

    if (status === 'pending') {
        return (<p>Loading...</p>)
    }

    console.log(CharsData)
    return (
        <div>
            <h1>Characters</h1>
            {CharsData.results.map((char, i) => {
                const charUrlParts = char.url.split('/').filter(Boolean)
                const charId = charUrlParts[charUrlParts.length - 1]
                return (
                    <div>
                        <aricle key={i}>
                            <Link to={`/characters/${charId}`}>
                                {char.name}
                            </Link>
                        </aricle>
                    </div>
                )
            })}
        </div>

    )
}

export default Characters