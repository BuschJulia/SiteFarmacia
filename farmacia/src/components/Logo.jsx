import React from 'react';
import logo from '/images/logo.png'; // Verifique o caminho correto da imagem

function Logo() {
  return (
    <div className="logo-container">
      <img src={logo} alt="Logo da Farmácia" />
      <h1>FARMÁRCIA</h1>
    </div>
  );
}

export default Logo;