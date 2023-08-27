import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchResults } from '../Redux/action.js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Home from './Home.js';

const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    
    const delaySearch = setTimeout(() => {
      if (searchTerm) {
        axios.get(`http://www.omdbapi.com/?s=${searchTerm}&apikey=f74fb972`)
          .then((response) => {
            dispatch(setSearchResults(response.data.Search || []));
          })
          .catch((error) => {
            console.error('Error fetching search results:', error);
          });
      } else {

        dispatch(setSearchResults([]));
      }
    }, 2000);

    return () => clearTimeout(delaySearch);
  }, [searchTerm, dispatch]);

  return (
    <div >
      <div className='d-flex nav justify-content-around'>

        <nav class="navbar navbar-light">
          <span class="navbar-brand mb-0 h1" style={{ 'color': 'white' }} onClick={() => navigate('/')}>Movie.io</span>
        </nav>

        <button class="button-29 fav-btn" onClick={() => navigate('/')}>Home</button>
        <button class="button-29 fav-btn" onClick={() => navigate('/favorites')}>My Favorites</button>

      </div>

      <div className='text-center m-3'>

        <input
          className='input-movie'
          type="text"
          placeholder="Search for a movie"
          value={searchTerm}
          onClick={() => navigate('/search')}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
