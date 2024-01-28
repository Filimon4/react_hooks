import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Link } from 'react-router-dom'
import './characters.css'

const Characters = () => {
    const {data: CharsData, status} = useQuery({
        queryKey: ['characters'],
        queryFn: async () => (await fetch("https://swapi.dev/api/people").then(res => res.json()))
    })

    if (status === 'pending') {
        return (<p>Loading...</p>)
    }

    return (
        <div className="char-page">
            <h1 className='char-title'>Characters</h1>
            {CharsData.results.map((char, i) => {
                const charUrlParts = char.url.split('/').filter(Boolean)
                const charId = charUrlParts[charUrlParts.length - 1]
                return (
                    <div className='char-plot'>
                        <aricle  key={i}>
                            <Link className='char-acticle' to={`/characters/${charId}`}>
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