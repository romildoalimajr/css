import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';

function App() {
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
      
    </div>
  );
}

export default App;
