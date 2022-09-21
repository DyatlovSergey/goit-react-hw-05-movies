import axios from "axios";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const API_KEY = "6c7797abd54a7809f73f6dce4bbe2947";

async function fetchMovies(url) {
  try {
    Loading.pulse();

    const response = await axios.get(url);
    const movies = await response.data;
    Loading.remove();
    return movies;
  } catch (error) {
    Notify.failure(`${error}`);

    Loading.remove();

    return Promise.reject(error);
  }
}

export function fetchPopularMovies() {
  return fetchMovies(
    `https://api.themoviedb.org/3/trending/movie/day?page=1&api_key=${API_KEY}`
  );
}

export function fetchMovieDetails(movieId) {
  const id = movieId;
  return fetchMovies(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  );
}

export function fetchMovieCast(movieId) {
  return fetchMovies(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
  );
}

export function fetchMovieReviews(movieId) {
  return fetchMovies(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
}

export function fetchSearchMovies(query) {
  return fetchMovies(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
  );
}
