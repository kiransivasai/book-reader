import React from "react";
import "./BookRead.scss";

const BookRead = () => {
  return (
    <div className="book-read">
      <textarea
        rows="10"
        cols="10"
        placeholder="Enter the story to read"
        className="book-input"
      />
      <button className="book-btn">Play</button>
    </div>
  );
};

export default BookRead;
