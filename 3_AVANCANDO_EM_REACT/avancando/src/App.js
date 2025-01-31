import './App.css';
import Img2 from './assets/img2.jpg'
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction'
import ChangeMessageState from './components/ChangeMessageState';
import Message from './components/Message';
import { useState } from 'react';

function App() {
  
  const cars = [
    {id: 1, brand: "Audi", color: "Azul", newCar: true, km:0},
    {id: 2, brand: "BME", color: "Preto", newCar: false, km:54},
    {id: 3, brand: "Porshe", color: "Branco", newCar: true, km:542},


  ]

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  function showMessage(){
    console.log("evento do componente pai")
  }


  return (
    <div className="App">
      <h1>avançando em react</h1>
      {/* imagem em public */}
      <div>
        <img src="/img1.jpg" alt="as" />
      </div>
      {/* imagem em public */}
      <div>
        <img src={Img2} alt="sd" />
      </div>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      {
        /*props */
      }
      <ShowUserName name ="wallames"/>
      {
        /*destructuring */
      }
      <CarDetails brand="AUDI" km={10000} color="Azul" newCar = {false}/>
      {
        /*reaproveitando */
      }
      <CarDetails brand="BMW" km={3000} color="Branco" newCar = {true}/>
      <CarDetails brand="FIAT" km={103000} color="Preto" newCar = {false}/>
      {
        /*loop em array */
      }
      {cars.map((car)=>(
        <CarDetails 
        key={car.id}
        brand={car.brand} 
        color={car.color} 
        km={car.kn}
        newCar={car.newCar}
        />
      ))}
      {
        /*fragment */
      }
      <Fragment/>

      {
        /*fragment */
      }
      <Container>ffff</Container>

      {
        /*executar função */
      }
      <ExecuteFunction myFunction={showMessage}/>

      {
        /*state lift */
      }
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
    </div>
    
  );
}

export default App;
