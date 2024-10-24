import './App.css';
import React, { useState } from 'react';

const App = () => {
  const [text, setText] = useState('');
  const [contador, setContador] = useState(0);

  const solicitarText = () => {
    fetch('http://localhost:5000/solicitar')
      .then(response => response.json())
      .then(data => {
        setText(data.name)
        setContador(contador + 1)
      })
      .catch(error => {
        console.error(error);
        setText('No se encontro dato');
      });
  }

  return (
    <div>
      <div className="containerHeader">
        <label className='logoTest'>LogoTest</label>
        <a href='#' className='iniciarSesion'>Sign In</a>
      </div>
      <main className='mainContainer'>
          <h1 className='titulo'>Presiona un botón y haz la prueba</h1>
          <button className='btnSolicitar' onClick={solicitarText}>Solicitar</button>
          <p className='texto'>Llegó: <span className='txtSpan'>{text.length > 0 ? text : '{{TextoQueLlegó}}'}</span></p>
          <p className='texto'>Se ha presionado: <span className='txtSpan'>{ contador > 0 ? contador : '{{#Veces}}'}</span></p>
      </main>
          
      <footer>
      </footer>
    </div>
  );
}

export default App;
