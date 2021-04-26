/* eslint-disable camelcase */
import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import PropTypes from 'prop-types';

const AuthorCard = ({
  first_name,
  last_name,
  email
}) => (
  <Card body className="text-center">
    <CardTitle tag="h5">{first_name} {last_name}</CardTitle>
    <CardText>{email}</CardText>
  </Card>
);

AuthorCard.propTypes = {
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  email: PropTypes.string
};

export default AuthorCard;
