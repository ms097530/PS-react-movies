import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';

const API_KEY = 'd222b784'
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&`


function App()
{
  const [movie, setMovie] = useState(null)
  const getMovie = async (searchTerm) =>
  {
    console.log(`fetching data about ${searchTerm}...`)
    const response = await fetch(`${BASE_URL}t=${searchTerm}`)
    console.log(response)
    let resBody = await response.json()
    console.log(resBody)

    // standardize key values so the first letters are not capitalized
    // TODO: make recursive
    let movieData = {}
    for (let [key, value] of Object.entries(resBody))
    {
      let firstLetterLower = key.charAt(0).toLowerCase()
      let newKey = firstLetterLower + key.slice(1)
      movieData[newKey] = value
    }
    // if match is found, save movie data, else set to null
    setMovie(movieData.response === 'True' ? movieData : null)
  }

  return (
    <div className="App">
      <Form movieSearch={getMovie} />
      {
        movie && <MovieDisplay movie={movie} />
      }
    </div>
  );
}

export default App;
