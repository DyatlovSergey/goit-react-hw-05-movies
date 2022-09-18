// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// Ключ API (v3 auth)
// 6c7797abd54a7809f73f6dce4bbe2947

// Пример API-запроса
// https://api.themoviedb.org/3/movie/550?api_key=6c7797abd54a7809f73f6dce4bbe2947

// Ключ доступа к API(v4 auth)
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Yzc3OTdhYmQ1NGE3ODA5ZjczZjZkY2U0YmJlMjk0NyIsInN1YiI6IjYzMjc0ZDZhYmJkMGIwMDA3YWIyZTlmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UPdyatBkp0324IFgwuGrG0XhfxmbXuHwmadfPFg7Z3Y
