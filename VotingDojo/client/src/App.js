import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import {Routes, Route} from "react-router-dom"

import PollsList from "./components/PollsList";


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element = {<PollsList/>} />
      {/* <Route path="/api/Pet/:id" element = {<Display/>} />
      <Route path="/api/Pet/new" element = {<PetForm/>} />
      <Route path="/api/Pet/update/:id" element = {<Edit/>} /> */}
    </Routes>
    </div>
  );
}

export default App;
