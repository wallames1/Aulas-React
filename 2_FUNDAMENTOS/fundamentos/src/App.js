//components
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import Events from './components/Events';

//css
import './App.css';
function App() {
  return (
    <div className="App">
      <FirstComponent/>
      <TemplateExpressions/>
      <Events/>
    </div>
  );
};

export default App;
