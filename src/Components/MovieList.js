// src/components/MovieList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../Redux/action.js';
import SearchBar from './SearchBar.js';
import Home from './Home.js';



const MovieList = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.searchResults);
  const favorites = useSelector((state) => state.favorites);

  const handleAddToFavorites = (movie) => {
    dispatch(addToFavorites(movie));
  };

  const handleRemoveFromFavorites = (movieID) => {
    dispatch(removeFromFavorites(movieID));
  };

  return (
    <div>
      <SearchBar />
      
      <h2 className='text-center m-4'>Search Movies...</h2>
      <div className='container'>

        <div className='col-md-12'>
          <div className='row'>
            {searchResults.map((movie) => (


              <div class="card m-3" style={{ "width": "18rem" }}>
                <img class="card-img-top" src={movie.Poster} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">{movie.Title}</h5>
                  <p class="card-text">Release Year : {movie.Year}</p>


                  {favorites.some((fav) => fav.imdbID === movie.imdbID) ? (
                    <button className='fav' onClick={() => handleRemoveFromFavorites(movie.imdbID)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                      </svg>

                    </button>
                  ) : (
                    <button className='fav' onClick={() => handleAddToFavorites(movie)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                      </svg>
                    </button>
                  )}

                </div>



              </div>




            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default MovieList;
