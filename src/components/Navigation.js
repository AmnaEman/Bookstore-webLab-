import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="nav">
      <Link to="/">Books</Link>
      <Link to="/categories">Categories</Link>
    </nav>
  );
};

export default Navigation;
