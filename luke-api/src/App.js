import './App.css';
import { Route, Routes } from 'react-router-dom';
import React from 'react';

import Search from './components/Search';

import People from './components/People';
import Planet from './components/Planet';
import Error from './components/Error'

function App() {
  return (
    <div className="App">
      <Search />
      <Routes>
        <Route element={<People />} path="/People/:id" />
        <Route element={<Planet />} path='/Planet/:id' />
        <Route component={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
