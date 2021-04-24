import React, { useState } from 'react';
import createAuthor from './helpers/data/AuthorData';

export default function AuthorForm() {
  const [author, setAuthor] = useState({
    first_name: '',
    last_name: '',
    email: '',
  });

  const handleInputChanges = (e) => {
    setAuthor((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createAuthor(author);
  };

  return (
    <>
      <div className="author-form">
        <form
          id="addAuthorForm"
          autoComplete="off"
          onSubmit={handleSubmit}
          >
          <h2>New Author</h2>
          <label>First Name: </label>
          <input
            name="first_name"
            type="text"
            placeholder="First Name"
            value={author.first_name}
            onChange={handleInputChanges}
          ></input>
          <label>Last Name: </label>
          <input
            name="last_name"
            type="text"
            placeholder="Last Name"
            value={author.last_name}
            onChange={handleInputChanges}
          ></input>
          <label>Email: </label>
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={author.email}
            onChange={handleInputChanges}
          ></input><br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
