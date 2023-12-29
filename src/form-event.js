const Form = () => {
  const handleFormInput = (e) => {
    /* e.target.value to get value */
    console.log(e.target);
    console.log(e.target.value);
    console.log(e.target.name);
  };
  const handleButtonClick = (e) => {
    console.log(e);
    e.preventDefault();
    alert('Form clicked');
  };
  const handleFormSubmission = (e) => {
    console.log(e);
    e.preventDefault();
    alert('Form Submitted Successfully');
  };
  return (
    <form className="form" onSubmit={handleFormSubmission}>
      <h2>Typical Form</h2>
      <input
        type="text"
        name="FullName"
        onChange={handleFormInput}
        style={{ margin: '1rem 0', width: '100%', padding: '0.5rem 0.5rem' }}
      />
      <button type="submit">submit form</button>
      <button type="button" onClick={handleButtonClick}>
        click me
      </button>
    </form>
  );
};

export default Form;

// const Form = () => {
//   const handleFormInput = (e) => {
//     /* e.target.value to get value */
//     console.log(e.target);
//     console.log(e.target.value);
//     console.log(e.target.name);
//   };
//   const handleButtonClick = (e) => {
//     console.log(e);
//     e.preventDefault();
//     alert('Form clicked');
//   };
//   const handleFormSubmission = (e) => {
//     console.log(e);
//     e.preventDefault();
//     alert('Form Submitted Successfully');
//   };
//   return (
//     <form className="form">
//       <h2>Typical Form</h2>
//       <input
//         type="text"
//         name="FullName"
//         onChange={handleFormInput}
//         style={{ margin: '1rem 0', width: '100%', padding: '0.5rem 0.5rem' }}
//       />
//       <button type="submit" onClick={handleFormSubmission}>
//         submit form
//       </button>
//       <button type="button" onClick={handleButtonClick}>
//         click me
//       </button>
//     </form>
//   );
// };

// export default Form;

// const Form = () => {
//   return (
//     <form
//       className="form"
//       onSubmit={(e) => {
//         e.preventDefault();
//         alert('Form Submitted Successfully');
//       }}
//     >
//       <h2>Typical Form</h2>
//       <input
//         type="text"
//         name="FullName"
//         onChange={(e) => {
//           console.log(e.target);
//           console.log(e.target.value);
//           console.log(e.target.name);
//         }}
//         style={{ margin: '1rem 0', width: '100%', padding: '0.5rem 0.5rem' }}
//       />
//       <button type="submit">submit form</button>
//       <button
//         type="button"
//         onClick={(e) => {
//           console.log(e);
//           e.preventDefault();
//           alert('Form clicked');
//         }}
//       >
//         click me
//       </button>
//     </form>
//   );
// };

// export default Form;
