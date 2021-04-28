import React from 'react';
import PropTypes from 'prop-types';
import AuthorForm from '../components/AuthorForm';

function AddAuthors({ setAuthors }) {
  return (
    <div>
      <AuthorForm
        formTitle='Add Author'
        setAuthors={setAuthors}
      />
    </div>
  );
}

AddAuthors.propTypes = {
  setAuthors: PropTypes.func
};

export default AddAuthors;
