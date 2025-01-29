import logo from './logo.svg';
import './App.css';
import Img2 from './assets/img2.jpg'
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';

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
    </div>
    
  );
}

export default App;
