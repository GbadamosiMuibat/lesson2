
import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (

    <Router>
       <div className="App">
    <FunctionalComponent/>

    <ClassComponent/>
    </div>----
    </Router>
    
  );
}

export default App;
