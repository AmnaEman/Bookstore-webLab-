import React from "react";
import Navigation from "./Navigation";
import BookList from "./BookList";
import BookForm from "./BookForm";

const BooksPage = () => {
  return (
    <div>
      <Navigation />
      <BookList />
      <BookForm />
    </div>
  );
};

export default BooksPage;
