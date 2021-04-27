/* eslint-disable camelcase */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createAuthor, updateAuthor } from './helpers/data/AuthorData';

export default function AuthorForm({
  formTitle,
  setAuthors,
  first_name,
  last_name,
  email,
  firebaseKey
}) {
  const [author, setAuthor] = useState({
    first_name: first_name || '',
    last_name: last_name || '',
    email: email || '',
    firebaseKey: firebaseKey || null
  });

  const handleInputChanges = (e) => {
    setAuthor((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (author.firebaseKey) {
      updateAuthor(author).then((authorArray) => setAuthors(authorArray));
    } else {
      createAuthor(author).then((authorArray) => setAuthors(authorArray));
    }
  };

  return (
    <>
      <div className="author-form">
        <form
          id="addAuthorForm"
          autoComplete="off"
          onSubmit={handleSubmit}
          >
          <h2>{formTitle}</h2>
        <div>
          <label>First Name: </label>
          <input
            name="first_name"
            type="text"
            placeholder="First Name"
            value={author.first_name}
            onChange={handleInputChanges}
          ></input>
        </div>
        <div>
          <label>Last Name: </label>
          <input
            name="last_name"
            type="text"
            placeholder="Last Name"
            value={author.last_name}
            onChange={handleInputChanges}
          ></input>
        </div>
        <div>
          <label>Email: </label>
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={author.email}
            onChange={handleInputChanges}
          ></input>
        </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

AuthorForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setAuthors: PropTypes.func,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  email: PropTypes.string,
  firebaseKey: PropTypes.string
};
