import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-logo">
                    <img src="/public/cricket-ball.webp" alt="logo" />
                    <span>CricMate</span>
                </div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">
                            Live Score
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/series" className="nav-link">
                            Series
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/matches" className="nav-link">
                            Matches
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/players" className="nav-link">
                            Players
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <hr />
        </>
    );
};

export default Navbar;
