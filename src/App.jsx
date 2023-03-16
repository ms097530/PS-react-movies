import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';

function App()
{
  const getMovie = (searchTerm) =>
  {
    console.log(`fetching data about ${searchTerm}...`)
  }

  return (
    <div className="App">
      <Form movieSearch={getMovie} />
      <MovieDisplay />
    </div>
  );
}

export default App;
