import { useState, useEffect } from 'react';
import { getMovie } from './services/omdbapi';
import './App.css';
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';




function App()
{
  const [movie, setMovie] = useState(null)
  // const getMovie = async (searchTerm) =>
  // {
  //   try
  //   {
  //     console.log(`fetching data about ${searchTerm}...`)
  //     const response = await fetch(`${BASE_URL}t=${searchTerm}`)
  //     console.log(response)
  //     let resBody = await response.json()
  //     console.log(resBody)

  //     // standardize key values so the first letters are not capitalized
  //     // TODO: make recursive
  //     let movieData = {}
  //     for (let [key, value] of Object.entries(resBody))
  //     {
  //       let firstLetterLower = key.charAt(0).toLowerCase()
  //       let newKey = firstLetterLower + key.slice(1)
  //       movieData[newKey] = value
  //     }
  //     // if match is found, save movie data, else set to null
  //     setMovie(movieData.response === 'True' ? movieData : null)
  //   }
  //   catch (e)
  //   {
  //     console.error(e)
  //   }
  // }

  // initialize with movie
  useEffect(() =>
  {
    async function initializeMovie()
    {
      let movie = await getMovie('Clueless')
      // console.log(movie)
      // simulate loading
      setTimeout(() => setMovie(movie), 5000)
    }
    initializeMovie()
  }, [])

  return (
    <div className="App">
      <Form movieSearch={async (movie) => { let newMovie = await getMovie(movie); setMovie(newMovie); }} />
      <MovieDisplay movie={movie} />
    </div>
  );
}

export default App;
