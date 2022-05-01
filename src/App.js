import logo from './logo.svg';
import './App.css';
import {Todo} from "./todo"
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes >
        <Route path = "/" element = {<Todo/>}></Route>
        <Route path = "/todo/:id"></Route>
      </Routes>
      
      
    </div>
  );
}

export default App;
