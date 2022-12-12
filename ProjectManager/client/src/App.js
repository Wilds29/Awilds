import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import {Routes, Route} from "react-router-dom"

import ProductList from "./components/ProductsList";
import Display from "./components/Display";
import ProductForm from "./components/ProductForm";
import Edit from "./components/Edit";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element = {<ProductList/>} />
      <Route path="/products/:id" element = {<Display/>} />
      <Route path="/products/new" element = {<ProductForm/>} />
      <Route path="/products/:id/edit" element = {<Edit/>} />
    </Routes>
    </div>
  );
}

export default App;
