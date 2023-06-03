import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { MainCreateNews, MainDetailNews, Login, MainApp, Register } from '../../pages';


const Routed = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<MainApp />} />
                <Route path="/create-news" element={<MainCreateNews />} />
                <Route path="/detail-news" element={<MainDetailNews />} />
            </Routes>
        </Router>
    )
}

export default Routed;
