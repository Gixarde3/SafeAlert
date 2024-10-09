import React from "react"
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    return (
        <header className="header">
            <div className="container header-content">
                <div className="principal-header">
                    <div className="menu-toggle"></div>
                    <div className="logo-container">
                        <img src="/img/logo.png" alt="Logo de SafeAlert" className="logo-img" />
                        <h1 className="logo">SafeAlert</h1>
                    </div>
                    <button className="menu-toggle" onClick={toggleMenu}>
                        <span className={`menu-toggle-icon ${isMenuOpen ? 'is-open' : ''}`}></span>
                    </button>
                </div>
            <nav className={`main-nav ${isMenuOpen ? 'is-open' : ''}`}>
                <ul className="nav-list">
                <li><a href="/" className="nav-link">Inicio</a></li>
                <li><a href="/reportar" className="nav-link">Reportar</a></li>
                <li><a href="#" className="nav-link">Perfiles</a></li>
                <li><a href="#" className="nav-link">Asistencia Legal</a></li>
                <li><a href="#" className="nav-link">Conciencia Pública</a></li>
                </ul>
            </nav>
            </div>
        </header>
    )
}