import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites } from '../Redux/action.js';
import { useNavigate } from 'react-router-dom';

const Favorites = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const favorites = useSelector((state) => state.favorites);


  const handleRemoveFromFavorites = (movieID) => {
    dispatch(removeFromFavorites(movieID));
  };

  return (
    <div>
      <div className='d-flex nav justify-content-around'>

        <nav class="navbar navbar-light">
          <span class="navbar-brand mb-0 h1" style={{ 'color': 'white' }} onClick={() => navigate('/')}>Movie.io</span>
        </nav>
        <button class="button-29 fav-btn" onClick={() => navigate('/favorites')}>My Favorites</button>

      </div>

      <h2 className='text-center m-3'>Favorites!</h2>

      <div className='container'>

        <div className='col-md-12'>
          <div className='row'>


            {favorites.map((movie) => (

              <div class="card m-3" style={{ "width": "18rem" }}>
                <img class="card-img-top" src={movie.Poster} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">{movie.Title}</h5>
                  <p class="card-text">Release Year : {movie.Year}</p>


                  <button className='fav' onClick={() => handleRemoveFromFavorites(movie.imdbID)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                      <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                    </svg>
                  </button>

                </div>
              </div>



              // <li key={movie.imdbID}>
              //   {movie.Title} ({movie.Year})
              //   <button onClick={() => handleRemoveFromFavorites(movie.imdbID)}>Remove from Favorites</button>
              // </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;

