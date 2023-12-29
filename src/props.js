import React from 'react';
import ReactDOM from 'react-dom/client';

import './app.css';
const title = 'Dinner Tonight';
const author = 'Alex Snodgrass';
const img = './images/book-1.jpg';

function Booklist() {
  return (
    <section className="booklist">
      <Book title={title} author={author} img={img} />
      <Book title={title} author={author} img={img} />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author.toUpperCase()}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Booklist />);
