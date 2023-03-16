import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';

function App()
{
  // const [searchText, setSearchText] = useState('')

  const getMovie = (searchTerm) =>
  {
    console.log('fetching data...')
  }

  return (
    <div className="App">
      <Form /* text={searchText} setText={setSearchText} */
        movieSearch={getMovie} />
      <MovieDisplay />
    </div>
  );
}

export default App;
