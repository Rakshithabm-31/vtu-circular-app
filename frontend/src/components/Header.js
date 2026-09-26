import React from "react";
import { Link } from "react-router-dom";
import '../styles/Header.css';


const Header = () => {
    return (
        <header className="header">
            <h1>VTU Circulars</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/archive">Archived Circulars</Link>
            </nav>
        </header>
    );
};

export default Header;
