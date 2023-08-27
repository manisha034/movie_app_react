import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'



export default function Home() {

    const [movies, setMovies] = useState([])

    const moviesList = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=edca993d7c8e2287af01d26d7b0b043e&page=2'

    const image_path = 'https://image.tmdb.org/t/p/w1280'

    useEffect(() => {

        fetch(moviesList)
            .then(res => res.json()).then(data => {
                setMovies(data.results)
            })
    }

        , [])


    return (
        <div>
            <SearchBar />
           
            <div className='container movie-app'>
                <div className='col-md-12'>
                    <div className='row'>
                        <h1 className='text-center mb-5'>Latest Movies</h1>

                        {movies && movies.length > 0 ?

                            movies.map((movie) => {
                                return (

                                    <div class="card m-3" style={{ "width": "18rem" }}>
                                        <img class="card-img-top" src={`${image_path}/${movie.backdrop_path}`} alt="Card image cap" />
                                        <div class="card-body">
                                            <h5 class="card-title">{movie.title}</h5>
                                            <p class="card-text">Release Year : {movie.release_date}</p>

                                        
                                        </div>



                                    </div>

                                )
                            })

                            : (
                                <h2>Loading...</h2>
                            )}



                    </div>
                </div>
            </div>


        </div>
    )
}
