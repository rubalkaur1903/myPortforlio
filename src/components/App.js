import React from "react";
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

import { Home } from '../components'

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <div className="navbar">
                    <Link className="main-link" to='/'>HOME</Link>
                </div>
                <Routes>
                    <Route path="/" element={<>
                        <Home />
                    </>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;