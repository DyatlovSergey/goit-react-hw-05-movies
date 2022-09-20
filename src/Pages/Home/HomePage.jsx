// import s from './HomePage.module.css';
import { useEffect, useState } from 'react';
import { fetchPopularMovies } from '../../fetch';
import HTag from '../../HTag';
import MoviesList from '../Movies/MoviesList';

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState(null);

  useEffect(() => {
    fetchPopularMovies().then(setPopularMovies);
  }, []);
  return (
    <section >
      
      <HTag title="Trending Today" />
      {popularMovies && <MoviesList response={popularMovies} />}
    </section>
  );
};


export default HomePage;