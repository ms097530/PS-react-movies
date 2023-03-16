import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';

const API_KEY = 'd222b784'
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&`


function App()
{
  const getMovie = async (searchTerm) =>
  {
    console.log(`fetching data about ${searchTerm}...`)
    const response = await fetch(`${BASE_URL}t=${searchTerm}`)
    console.log(response)
    let resBody = await response.json()
    console.log(resBody)
  }

  return (
    <div className="App">
      <Form movieSearch={getMovie} />
      <MovieDisplay />
    </div>
  );
}

export default App;
