import './App.css';
import MyComponent from "./components/MyComponent";

function App() {
  return (
    <div className="App">
      {/**css de global */}
      <h1>REACT COM CSS</h1>
      {/**css de componente */}
      <MyComponent/>
      <p>este paragrafo é do app.js</p>
      <p className="test" >este paragrafo é do app.js</p>
    </div>

  );
}

export default App;
