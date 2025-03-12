import logo from './logo.svg';
import './App.css';

//reaproveitamento de estrutura
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <p>Navbar</p>
      <h1>REACT-ROUTER</h1>
      <Outlet/>
      <p>Footer</p>
      
    </div>
  );
}

export default App;
