export const addToFavorites = (movie) => ({
    type: 'ADD_TO_FAVORITES',
    payload: movie,
  });
  
  export const removeFromFavorites = (movieID) => ({
    type: 'REMOVE_FROM_FAVORITES',
    payload: movieID,
  });
  
  export const setSearchResults = (results) => ({
    type: 'SET_SEARCH_RESULTS',
    payload: results,
  });
  