import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import {Routes, Route} from "react-router-dom"

import PetList from "./components/PetList";
import Display from "./components/display";
import PetForm from "./components/add";
import Edit from "./components/edit";



function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element = {<PetList/>} />
      <Route path="/api/Pet/:id" element = {<Display/>} />
      <Route path="/api/Pet/new" element = {<PetForm/>} />
      <Route path="/api/Pet/update/:id" element = {<Edit/>} />
      {/* <Route path="/products/:id" element = {<Display/>} />
      <Route path="/products/new" element = {<ProductForm/>} />
      <Route path="/products/:id/edit" element = {<Edit/>} /> */}
    </Routes>
    </div>
  );
}

export default App;