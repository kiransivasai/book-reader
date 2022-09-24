import React from "react";
import "./Header.scss";
import book_icon from "../../assets/book-icon.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <img src={book_icon} alt="Book" />
        <h1>Book Reader</h1>
      </div>
      <div className="header-right"></div>
    </div>
  );
};

export default Header;
