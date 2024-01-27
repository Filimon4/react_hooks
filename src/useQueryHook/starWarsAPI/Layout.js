import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Films from './pages/Films'
import Characters from './pages/Characters'
import Film from './pages/Film'
import Character from './pages/Character'

const Layout = () => {
    return (
        <div className="App">
            <main>
                <Routes>
                    <Route path="films" element={<Films />} />
                    <Route path="films/:filmId" element={<Film />} />
                    <Route path="characters/" element={<Characters />} />
                    <Route path="characters/:charactersId" element={<Character />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </main>
        </div>
    )
}

export default Layout