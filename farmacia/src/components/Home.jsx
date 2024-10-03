import React from 'react';
import background from '/images/fundo.png';
import placa from '/images/placa.png';
import './css/Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="text-container">
        <h1>Bem-Vindos de Volta</h1>    
        <p>Farmácia sob novo gerenciamento. Faça parte da nossa história!</p>
      </div>
      <div className="placa">
        <img src={placa} alt="Placa PNG" className='plaquinha'/>
      </div>
    </div>
  );
}

export default Home;
