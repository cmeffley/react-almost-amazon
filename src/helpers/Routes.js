import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import Authors from '../views/Authors';
import AddAuthors from '../views/AddAuthors';

function Routes({ authors, setAuthors }) {
  return (
    <div>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route
        path='/authors'
        component={() => <Authors authors={authors} setAuthors={setAuthors} />}
      />
      <Route
        path='/add-authors'
        component={() => <AddAuthors setAuthors={setAuthors} />}
      />
    </Switch>
  </div>
  );
}

Routes.propTypes = {
  authors: PropTypes.array.isRequired,
  setAuthors: PropTypes.func.isRequired
};

export default Routes;
