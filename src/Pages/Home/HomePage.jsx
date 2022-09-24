import s from './HomePage.module.css';
import { useEffect, useState } from 'react';
import { fetchPopularMovies } from '../../fetch';
import MoviesList from '../../Components/MoviesList/MoviesList';

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState(null);

  useEffect(() => {
    fetchPopularMovies().then(setPopularMovies);
  }, []);
  return (
    <section className={s.homePage}>
      <h1 className={s.title}>Trending Today</h1>
      {popularMovies && <MoviesList response={popularMovies} />}
    </section>
  );
};

export default HomePage;