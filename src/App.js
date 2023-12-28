import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BooksPage from "../src/components/BooksPage";
import CategoriesPage from "./components/CategoriesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
