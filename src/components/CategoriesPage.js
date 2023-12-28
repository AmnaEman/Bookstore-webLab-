import React from "react";
import Navigation from "./Navigation";
import { useSelector } from "react-redux";
import "./CategoriesPage.css";

const CategoriesPage = () => {
  const status = useSelector((state) => state.categories);
  console.log(status);

  return (
    <div className="categories-page">
      <Navigation />
      <h2 className="categories-title">Categories {status.status}</h2>
      <ul className="categories-list">
        {status.categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesPage;
