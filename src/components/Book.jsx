import React, { useState } from "react";
import { books } from "./Books";
const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };
  return (
    <>
      <h1 className="heading">Amazon best seller Books</h1>
      <section className="booklist">
        {books.map((book, index) => (
          <Book key={book.id} {...book} getBook={getBook} index={index + 1} />
        ))}
      </section>
    </>
  );

  //Children prop
  // return (
  //   <section className="booklist">
  //     <Book
  //       name={books.name}
  //       authorName={books.authorName}
  //       link={books.link}
  //     >
  //       <h2>Title</h2>
  //       <p>This is the content of the card.</p>
  //     </Book>
  //   </section>
  // );
};

const Book = ({ name, authorName, link, children, getBook, id, index }) => {
  // const [hovered, setHovered] = useState(false);
  const getSingleBook = () => {
    getBook(id);
  };
  return (
    <>
      <article className="book">
        <span className="number">{index}</span>
        <Image link={link} />
        <Title title={name} />
        <Author author={authorName} />
        <button onClick={getSingleBook}>GetBook</button>
        {children}
      </article>
    </>
  );
};

const Image = ({ link }) => <img src={link} alt="amazon" />;
const Title = ({ title }) => <h2>{title}</h2>;
const Author = ({ author }) => <h4>{author}</h4>;

export default BookList;
