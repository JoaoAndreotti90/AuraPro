import React, { useState } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [menuAtivo, setMenuAtivo] = useState(false);

    const toggleMenu = () => {
        setMenuAtivo(!menuAtivo);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <header className='header-class'>

                <nav className='menu-logo'>
                    <NavLink to="/" className="logo" onClick={scrollToTop}>
                        <img src="/Imagem/logo.png" alt="Logo Aura" className="logo-img" />
                        Aura
                    </NavLink>
                </nav>

                <nav className='menu-central'>
                    <a href="#features" className="link-do-menu">Features</a>
                    <a href="#especificacoes" className="link-do-menu">Especificações</a>
                    <a href="#reviews" className="link-do-menu">Reviews</a>
                </nav>

                <nav className='menu-direita'>
                    <NavLink to="/" className="link-compra">Compra</NavLink>
                </nav>

                <div className={`hamburger ${menuAtivo ? "active" : ""}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

            </header>

            <div className={`nav-menu-mobile ${menuAtivo ? "active" : ""}`}>
                <a href="#features" className="link-do-menu" onClick={toggleMenu}>Features</a>
                <a href="#especificacoes" className="link-do-menu" onClick={toggleMenu}>Especificações</a>
                <a href="#reviews" className="link-do-menu" onClick={toggleMenu}>Reviews</a>
                <NavLink to="/" className="link-compra" onClick={toggleMenu}>Compra</NavLink>
            </div>
        </>
    )
}

export default Header;