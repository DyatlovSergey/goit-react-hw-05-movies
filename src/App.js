// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import "./App.css";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import { ToastContainer } from "react-toastify";
import Cast from "./Components/Cast/Cast";
import Reviews from "./Components/Reviews/Reviews";

const HomePage = lazy(() =>
  import("./Pages/Home/HomePage.jsx" /* webpackChunkName: "home-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./Pages/MovieDetails/MovieDetailsPage.jsx" /* webpackChunkName: "movies-detail" */
  )
);
const MoviesPage = lazy(() =>
  import(
    "./Pages/MoviesPage/MoviesPage.jsx" /* webpackChunkName: "movies-page" */
  )
);

export const App = () => {
  return (
    <section>
      <ToastContainer />
      <Navigation />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<MovieDetailsPage />}>
            <Route path="/movies/:id/cast" element={<Cast />} />
            <Route path="/movies/:id/reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </section>
  );
};

export default App;
