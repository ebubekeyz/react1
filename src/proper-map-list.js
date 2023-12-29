import React from 'react';
import ReactDOM from 'react-dom/client';

import './app.css';
const books = [
  {
    title: 'Oath and Honor',
    author: 'Liz Cheney ',
    img: './images/book-2.jpg',
  },
  {
    author: 'Tui T. Sutherland',
    title: 'Winter Turning',
    img: './images/book-1.jpg',
  },
];

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { title, author, img } = book;
        return <Book img={img} title={title} author={author} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { title, img, author } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Booklist />);
