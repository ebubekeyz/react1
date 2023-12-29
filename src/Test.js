// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './app.css';

// function BookList() {
//   return (
//     <section className="booklist">
//       <Book />
//       <Book />
//       <Book />
//     </section>
//   );
// }

// const Book = () => {
//   return (
//     <article className="book">
//       <Image />
//       <Title />
//       <Author />
//     </article>
//   );
// };

// const Image = () => (
//   <img src="./images/book-1.jpg" alt="Interesting facts for curious readers" />
// );
// const Title = () => {
//   return <h2>Dinner Tonight</h2>;
// };
// const Author = () => {
//   return (
//     <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' }}>
//       Alex Snodgrass
//     </h4>
//   );
// };

// const Author = () => {
//   const inlineHeadingStyles = {
//     color: '#617d98',
//     fontSize: '0.75rem',
//     marginTop: '0.5rem',
//   };
//   return <h4 style={inlineHeadingStyles}>Alex Snodgrass</h4>;
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<BookList />);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './app.css';

// function HomePage() {
//   return (
//     <section className="booklist">
//       <Book />
//       <Book />
//     </section>
//   );
// }

// const Book = () => {
//   const inlineHeadingStyles = {
//     color: '#617d98',
//     fontSize: '0.75rem',
//     marginTop: '0.5rem',
//   };
//   return (
//     <article className="book">
//       <img src="./images/book-1.jpg" alt="" />
//       <h2>Dinner Tonight</h2>
//       <h4 style={inlineHeadingStyles}>Alex Snodgrass</h4>
//     </article>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<HomePage />);

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// import './app.css';
// const title = 'Dinner Tonight';
// const author = 'Alex Snodgrass';
// const img = './images/book-1.jpg';

// function Booklist() {
//   return (
//     <section className="booklist">
//       <Book />
//       <Book />
//     </section>
//   );
// }

// const Book = () => {
//   return (
//     <article className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author.toUpperCase()}</h4>
//     </article>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<Booklist />);
