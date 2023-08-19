import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Book from "./components/Book";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Book />
  </StrictMode>
);
