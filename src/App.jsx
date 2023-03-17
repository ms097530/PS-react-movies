import { useState, useEffect } from 'react';
import { getMovie } from './services/omdbapi';
import './App.css';
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

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
      <Navbar>
        <Container>
          <Navbar.Brand>BRAND</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Form
        movieSearch={updateMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}

export default App;
