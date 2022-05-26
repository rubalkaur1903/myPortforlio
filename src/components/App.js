import React from "react";
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

import { Intro, Profile } from '../components'

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <div className="navbar">
                    <Link className="main-link" to='/'>INTRO</Link>
                    <Link className="main-link" to='/profile'>PROFILE</Link>
                </div>
                <Routes>
                    <Route exact path="/" element={<Intro />} />
                    <Route exact path="/profile" element={<Profile />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;