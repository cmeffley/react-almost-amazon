/* eslint-disable camelcase */
import React, { useState } from 'react';
import {
  Card,
  Button,
  CardTitle,
  CardText
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteAuthor } from '../helpers/data/AuthorData';
import AuthorForm from '../AuthorForm';

const AuthorCard = ({
  firebaseKey,
  first_name,
  last_name,
  email,
  setAuthors
}) => {
  const [editing, setEditing] = useState(false);

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteAuthor(firebaseKey)
          .then((authorArray) => setAuthors(authorArray));
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
        console.warn('Nothing Selected');
    }
  };

  return (
    <Card body className="text-center">
      <CardTitle tag="h5">{first_name} {last_name}</CardTitle>
      <CardText>{email}</CardText>
      <Button color="danger" onClick={() => handleClick('delete')}>Delete Author</Button>
      <Button color="info" onClick={() => handleClick('edit')}>
        {editing ? 'Close Form' : 'Edit Author'}
      </Button>
      {
        editing && <AuthorForm
          formTitle="Edit Author"
          setAuthors={setAuthors}
          firebaseKey={firebaseKey}
          first_name={first_name}
          last_name={last_name}
          email={email}
        />
      }
    </Card>
  );
};

AuthorCard.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  email: PropTypes.string,
  setAuthors: PropTypes.func
};

export default AuthorCard;
