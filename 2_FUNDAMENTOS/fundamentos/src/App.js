//components
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import Events from './components/Events';
import Challenge from './components/Challenge'

//css
import './App.css';
function App() {
  return (
    <div className="App">
      <FirstComponent/>
      <TemplateExpressions/>
      <Events/>
      <Challenge/>
    </div>
  );
};

export default App;
