import React from 'react';
import { NavLink } from 'react-router-dom'; 
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className='footer-container'>
            
            <div className='footer-logo'>
                <NavLink to="/" className="logo">
                    <img src="/Imagem/logo.png" alt="Logo Aura" className="logo-img" />
                    Aura
                </NavLink>
            </div>

            <nav className='footer-nav'>
                <NavLink to="/" className="footer-link">Privacidade</NavLink>
                <NavLink to="/" className="footer-link">Termos</NavLink>
                <NavLink to="/" className="footer-link">Suporte</NavLink>
                <NavLink to="/" className="footer-link">Contato</NavLink>
            </nav>

            <p className="copyright">
                © 2025 AURA. Todos os direitos reservados.
            </p>

        </div>
    </footer>
  )
}

export default Footer;