import './App.css';
import Cars from './components/Cars';

function App() {

  const myCars = [
    {name:"BMW", km:1000, color:"branco"},
    {name:"Audi", km:2000, color:"preto"},
    {name:"Ferrari", km:144, color:"azul"},
  ]
  return (
    <div className="App">
      <h1 >CARROS FODAS</h1>
      <div className='car-container'></div>
      {myCars.map((car) => (
        <Cars car={car}/>
      ))}

      
    </div>
  );
}

export default App;
