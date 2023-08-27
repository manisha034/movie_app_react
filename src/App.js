import React from 'react';

import './App.css';
import SearchBar from './Components/SearchBar';
import MovieList from './Components/MovieList';
import Favorites from './Components/Favorites';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/search' element={<MovieList />}></Route>
        <Route path='/favorites' element={<Favorites />}></Route>
        <Route path='/' element={<Home />}></Route>
      </Routes>

      {/* <div className="App-content">

        <MovieList />
        <Favorites />
      </div> */}
    </div>
  );
}

export default App;
