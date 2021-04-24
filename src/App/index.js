import React from 'react';
import firebase from 'firebase';
import firebaseConfig from '../helpers/apiKeys';
import './App.scss';
import AuthorForm from '../AuthorForm';

function App() {
  firebase.initializeApp(firebaseConfig);

  return (
    <div className='App'>
      <AuthorForm />
    </div>
  );
}

export default App;
