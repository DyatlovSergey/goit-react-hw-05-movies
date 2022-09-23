import "./App.css";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation";
import { ToastContainer } from "react-toastify";
import Cast from "./Components/Cast/Cast";
import Reviews from "./Components/Reviews/Reviews";

const HomePage = lazy(() =>
  import("./Pages/Home/HomePage.jsx" /* webpackChunkName: "home-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./Pages/MovieDetails/MovieDetailsPage" /* webpackChunkName: "movies-detail" */
  )
);
const MoviesPage = lazy(() =>
  import(
    "./Pages/MoviesPage/MoviesPage.jsx" /* webpackChunkName: "movies-page" */
  )
);

function App() {
  return (
    <section>
      <ToastContainer />
      <Navigation />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route exact path="/home" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<MovieDetailsPage />}>
            <Route path="/movies/:id/cast" element={<Cast />} />
            <Route path="/movies/:id/reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </section>
  );
}

export default App;
