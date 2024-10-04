import React from 'react';
import Logo from './Logo'; // Importe o novo componente
import './css/Header.css';

function Header() {
  return (
    <nav>
      <Logo /> {Logo}
      
      <div className='links'>
        <button>Promoções</button>
        <button>Home</button>
        <button>Sobre</button>
        <button>Contato</button>
        <button>Senhas</button>
      </div>
    </nav>
  );
}

export default Header;