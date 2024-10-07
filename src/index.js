import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import books from "./books";
import Book from "./Book";

const BookList = () => {
  return (
    <section className="Booklist">
      <h1>Amazon best sellers</h1>
      {books.map((book, index) => {
        return (
          <Book {...book} key={book.Id} number={index}>
            {" "}
          </Book>
        );
      })}
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
