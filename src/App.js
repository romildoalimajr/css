import logo from './logo.svg';
import './App.css';
import { useState} from 'react';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {

  const n = 15

  const [name] = useState('Romildo');

  const redTitle = true;

  return (
    <div className="App">
      <h1>React com CSS</h1>
      <MyComponent />
      <p>Este parágrafo é do App.js</p>
      {/*Inline CSS*/}
      <p style={{ color: 'blue', padding: '25px', borderTop: "5px solid red" }}>
        Este elemento foi estilizado de forma inline...
      </p>
      <p style={{ color: 'magenta', padding: '25px', borderTop: "5px solid gold" }}>
        Este elemento foi estilizado de forma inline...
      </p>
      {/* CSS Inline dinâmico */}
      <h2 style={n < 10 ? ({ color: 'purple' }) : ({ color: 'pink' })}>CSS Dinâmico</h2>
      <h2 style={n > 10 ? ({ color: 'purple' }) : ({ color: 'pink' })}>CSS Dinâmico</h2>
      <h2 style={name === 'Romildo' ? ({ color: 'green', backgroundColor:"#000" }) : null }>
        CSS Dinâmico condição verdadeira
      </h2>
      <h2 style={name === 'Junior' ? ({ color: 'green', backgroundColor:"#000" }) : null }>CSS Dinâmico condição falsa</h2>

      {/*Classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter classe dinâmica se for true</h2>
      <h2 className={redTitle === false ? "red-title" : "title"}>Este título vai ter classe dinâmica se for false</h2>
      {/** CSS Módules */}
      <Title />

    </div>
  );
}

export default App;
