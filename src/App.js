import React, { useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg';

//9d5094d5

const API_URL = 'http://www.omdbapi.com?apikey=9d5094d5';


const App = () => {
    const [Movies, setMovies] = useState([]);
    const [SearchWord, setSearchWord] = useState('');

    const searchMovie = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }


    return (
        <div className='app'>
            <h1>MovieLand</h1>
            <div className='search'>
                <input
                    placeholder='Please Enter A Movie Name'
                    value={SearchWord}
                    onChange={(e) => {setSearchWord(e.target.value)}}
                />
                <img
                    src={SearchIcon}
                    alt='search'
                    onClick={() => {searchMovie(SearchWord)}}
                />
            </div>

            {
                Movies.length > 0
                    ? (<div className='container'>
                        {
                            Movies.map((movie) => (
                                <MovieCard Movie={movie} />
                            ))
                        }
                        </div>
                      )
                    : (
                        <div className='empty'>
                            <h2>No Movie Found</h2>
                        </div>
                    )
            }


        </div>
    );
}

export default App;