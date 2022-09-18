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
// import Navigation from "./components/Navigation";
import { ToastContainer } from "react-toastify";
// import Cast from "./components/Cast/Cast";
// import Reviews from "./components/Reviews/Reviews";

const HomePage = lazy(() =>
  import("./Pages/Home/HomePage" /* webpackChunkName: "home-page" */)
);

function App() {
  return (
    <section>
      <ToastContainer />
      {/* <Navigation /> */}
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/movies" element={<MoviesPage />} /> */}
          {/* <Route path="/movies/:id" element={<MovieDetailsPage />}>
            <Route path="/movies/:id/cast" element={<Cast />} />
            <Route path="/movies/:id/reviews" element={<Reviews />} />
          </Route> */}
        </Routes>
      </Suspense>
    </section>
  );
}

export default App;
