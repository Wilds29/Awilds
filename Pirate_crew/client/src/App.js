import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import {Routes, Route} from "react-router-dom"

import PirateList from "./components/PirateList";
import Display from "./components/Display";
import PirateForm from "./components/Add";
import Edit from "./components/Edit";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element= {<PirateList/>} />
        <Route path="/api/pirate/:id" element= {<Display/>} />
        <Route path="/api/pirate/new" element= {<PirateForm/>} />
        <Route path="/api/pirate/:id/edit" element= {<Edit/>} />
      </Routes>
    </div>
  );
}

export default App;
