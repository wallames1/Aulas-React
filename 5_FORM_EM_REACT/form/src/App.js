import logo from './logo.svg';
import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>FORMULARIO</h2>
      <MyForm user={{name:"wallames", email:"wallames@live.com"}}/>
    </div>
  );
}

export default App;
