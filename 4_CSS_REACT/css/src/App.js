import './App.css';
import MyComponent from "./components/MyComponent";
import Title from './components/Title';

function App() {
  const n = 50
  const redTitle = false;
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
      {/**classe dinamica */}
      <h2 className={redTitle ? "red-title":"title"}>este titulo vai ter classe dinamica</h2>
      {/**Css modules */}
      <Title/>
    </div>

  );
}

export default App;
