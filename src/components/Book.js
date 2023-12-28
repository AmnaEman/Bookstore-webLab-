import React from "react";
import { useDispatch } from "react-redux";
import { removeBook } from "../redux/booksSlice";
import "./Book.css";

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBook(book.item_id));
  };

  return (
    <div className="book-tile">
      <h3 className="book-title">{book.title}</h3>
      <p className="book-author">Author: {book.author}</p>
      <p className="book-category">Category: {book.category}</p>

      <button className="remove-button" onClick={handleRemove}>
        Remove Book
      </button>
    </div>
  );
};

export default Book;
