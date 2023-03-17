import { useState, useEffect } from 'react';
import { getMovie } from './services/omdbapi';
import './App.css';
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';

function App()
{
  const [movie, setMovie] = useState(null)

  // initialize with movie
  useEffect(() =>
  {
    async function initializeMovie()
    {
      let movie = await getMovie('Clueless')
      // simulate loading
      setTimeout(() => setMovie(movie), 5000)
    }
    initializeMovie()
  }, [])

  const updateMovie = async (movie) =>
  {
    let newMovie = await getMovie(movie);
    setMovie(newMovie);
  }

  return (
    <div className="App">
      <NavBar />
      <Container className='mt-5'>
        <Form
          movieSearch={updateMovie} />
        <MovieDisplay movie={movie} />
      </Container>
    </div>
  );
}

export default App;
