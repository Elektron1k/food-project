import { useEffect, useState } from 'react';
import Movies from '../components/Movies';
import Preloader from '../components/Preloader';
import Search from '../components/Search';

const API_REY = process.env.REACT_APP_API_KEY;

function Main() {
  const [searchText, setSearchText] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://www.omdbapi.com/?apikey=${API_REY}&s=${searchText}`)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.Search);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchText]);

  function startSearch(textSearch, radioButtonSearch) {
    radioButtonSearch === 'all'
      ? setSearchText(textSearch)
      : setSearchText(textSearch + '&type=' + radioButtonSearch);
  }

  return (
    <main className="container content">
      <Search search={startSearch} />
      {isLoading ? <Preloader /> : <Movies movies={movies} />}
    </main>
  );
}

export default Main;
