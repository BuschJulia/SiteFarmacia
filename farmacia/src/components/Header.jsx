import React from 'react';
import logo from '/images/logo.png';
import './css/Header.css';

function Header() {
  return (
    <nav>
      <div className="logo-container">
        <img src={logo} alt="Logo da Farmácia" />
        <h1>FARMÁRCIA</h1>
      </div>
      
      <div className='links'>
        <button>Home</button>
        <button>Sobre</button>
        <button>Contato</button>
        <button>Senhas</button>
      </div>
    </nav>
  );
}

export default Header;