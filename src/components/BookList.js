import React from "react";
import { useSelector } from "react-redux";
import Book from "./Book";
import "./BookList.css";

const BooksList = () => {
  const books = useSelector((state) => state.books);

  return (
    <div className="books-list">
      {books.map((book) => (
        <div className="book-item">
          <Book key={book.item_id} book={book} />
        </div>
      ))}
    </div>
  );
};

export default BooksList;
