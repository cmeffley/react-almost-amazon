import React, { useState, useEffect } from 'react';
import './App.scss';
import AuthorForm from '../AuthorForm';
import AuthorCard from '../components/AuthorCard';
import { getAuthor } from '../helpers/data/AuthorData';

function App() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getAuthor().then((response) => setAuthors(response));
  }, []);

  return (
    <div className='App'>
      <AuthorForm
        formTitle='Add Author'
        setAuthors={setAuthors}
      />
      <hr/>
      {authors.map((authorInfo) => (
        <AuthorCard
          key={authorInfo.firebaseKey}
          firebaseKey={authorInfo.firebaseKey}
          first_name={authorInfo.first_name}
          last_name={authorInfo.last_name}
          email={authorInfo.email}
          setAuthors={setAuthors}
        />
      ))}
    </div>
  );
}

export default App;
