import React from 'react';
import ReactDOM from 'react-dom/client';

import './app.css';

const firstBook = {
  title: 'Oath and Honor',
  author: 'Liz Cheney ',
  img: './images/book-2.jpg',
};

const secondBook = {
  author: 'Tui T. Sutherland',
  title: 'Winter Turning',
  img: './images/book-1.jpg',
};

function Booklist() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

// const Book = (props) => {
//   const { title, img, author } = props;
//   return (
//     <article className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author}</h4>
//     </article>
//   );
// };
const Book = ({ title, img, author }) => {
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
