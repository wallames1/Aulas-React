import './App.css';
import MyComponent from "./components/MyComponent";

function App() {
  const n = 50
  return (
    <div className="App">
      {/**css de global */}
      <h1>REACT COM CSS</h1>
      {/**css de componente */}
      <MyComponent/>
      <p>este paragrafo é do app.js</p>
      <p className="test" >este paragrafo é do app.js</p>
      <h1 style={n > 10 ? {color:"blue"} : {color:"black"} }>CSS DINAMICO INLINE</h1>
      <h1 style={n < 10 ? {color:"blue"} : {color:"black"} }>CSS DINAMICO INLINE</h1>

    </div>

  );
}

export default App;
