import React from 'react';
import ReactDOM from 'react-dom/client';

import './app.css';
const books = [
  {
    title: 'Oath and Honor',
    author: 'Liz Cheney ',
    img: './images/book-2.jpg',
    id: 1,
  },
  {
    author: 'Tui T. Sutherland',
    title: 'Winter Turning',
    img: './images/book-1.jpg',
    id: 2,
  },
];

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
  const displayTitle = () => {
    console.log(title);
  };
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button
        onClick={displayTitle}
        style={{
          margin: '1rem 0',
          padding: '0.3rem 0.3rem',
          textTransform: 'capitalize',
        }}
      >
        display title
      </button>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Booklist />);
