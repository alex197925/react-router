import React from 'react';
import './index.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Error from './pages/Error'
import { BrowserRouter, NavLink, Routes, Route, Navigate } from 'react-router-dom';

export default function App() {
    let activeClassName = "nav-active";
    return (
        <BrowserRouter>
            <nav className="navbar">
                <div className="logo"><a href="#">Logo</a></div>
                <NavLink to="" className={({ isActive }) => isActive && activeClassName}>Home</NavLink>
                <NavLink to="about" className={({ isActive }) => isActive && activeClassName}>About</NavLink>
                <NavLink to="contact" className={({ isActive }) => isActive && activeClassName}>Contact</NavLink>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="about" element={<About/>} />
                <Route path="contact" element={<Contact/>} />
                <Route path="dashboard" element={<Navigate to="/" />} />
                <Route path="*" element={<Error/>} />
            </Routes>
        </BrowserRouter>
    );
}