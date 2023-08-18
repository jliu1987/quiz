import {questions} from './helper/dataModel';
import './App.css';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
        <Navbar questions={questions}/>
    </div>
  );
}

export default App;
