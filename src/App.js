import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation";
import { ToastContainer } from "react-toastify";
import Cast from "./Components/Cast/Cast";
import Reviews from "./Components/Reviews/Reviews";
import NotFound from "./Pages/NotFound/NotFound";
// import { Link } from "./App.styled";

const HomePage = lazy(() => import("./Pages/Home/HomePage.jsx"));
const MovieDetailsPage = lazy(() =>
  import("./Pages/MovieDetails/MovieDetailsPage")
);
const MoviesPage = lazy(() => import("./Pages/MoviesPage/MoviesPage.jsx"));

function App() {
  return (
    <section>
      <ToastContainer />
      <Navigation />
      <Suspense fallback={<h1>Loading...</h1>}>
        {/* <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<MovieDetailsPage />}>
            <Route path="/movies/:id/cast" element={<Cast />} />
            <Route path="/movies/:id/reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </section>
  );
}

export default App;
