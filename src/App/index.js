import React, { useState, useEffect } from 'react';
import './App.scss';
import AuthorForm from '../AuthorForm';
import AuthorCard from '../components/AuthorCard';
import { getAuthor } from '../helpers/data/AuthorData';

function App() {
  const [author, setAuthor] = useState([]);

  useEffect(() => {
    getAuthor().then((response) => setAuthor(response));
  }, []);

  return (
    <div className='App'>
      <AuthorForm formTitle='Add Author'/>
      <hr/>
      {author.map((authorInfo) => (
        <AuthorCard
          key={authorInfo.firebaseKey}
          first_name={authorInfo.first_name}
          last_name={authorInfo.last_name}
          email={authorInfo.email}/>
      ))}
    </div>
  );
}

export default App;
