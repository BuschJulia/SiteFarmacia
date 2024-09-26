import React from 'react';

function Header() {
  return (
    <header>
      <nav className='navbar'>
      <img src="./public/images/LogoCompleto.png" alt="" />
        <button>Sobre</button>
        <button>Inauguração</button>
        <button>Loja</button>
        <button>Contato</button>
      </nav>
    </header>
  );
}

export default Header;
