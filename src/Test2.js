// import React from 'react';
// import ReactDOM from 'react-dom/client';

// import './app.css';
// const books = [
//   {
//     title: 'Oath and Honor',
//     author: 'Liz Cheney ',
//     img: './images/book-2.jpg',
//   },
//   {
//     author: 'Tui T. Sutherland',
//     title: 'Winter Turning',
//     img: './images/book-1.jpg',
//   },
// ];

// function Booklist() {
//   return (
//     <section className="booklist">
//       {books.map((book) => {
//         const { author, title, img } = book;

//         return <Book img={img} author={author} title={title} />;
//       })}
//     </section>
//   );
// }

// const Book = (props) => {
//   const { img, title, author } = props;
//   return (
//     <article className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author}</h4>
//     </article>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<Booklist />);

import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './form-event.js';
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
      <Form />
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
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
