import logo from './logo.svg';
import './App.css';
import { useState} from 'react';
import MyComponent from './components/MyComponent';

function App() {

  const n = 15

  const [name] = useState('Romildo');

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
      <h2 style={name === 'Romildo' ? ({ color: 'green', backgroundColor:"#000" }) : null }>CSS Dinâmico condição verdadeira</h2>
      <h2 style={name === 'Junior' ? ({ color: 'green', backgroundColor:"#000" }) : null }>CSS Dinâmico condição falsa</h2>

      {/*CSS Inline Dinamico */}
      <h2>CSS dinâmico</h2>
    </div>
  );
}

export default App;
