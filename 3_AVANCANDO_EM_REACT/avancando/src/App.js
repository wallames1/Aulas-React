import logo from './logo.svg';
import './App.css';
import Img2 from './assets/img2.jpg'
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';

function App() {
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
    </div>
    
  );
}

export default App;
