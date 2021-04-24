import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const createAuthor = (authorObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/Authors.json`, authorObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/Authors/${response.data.name}.json`, body)
        .then(() => resolve(authorObject));
    })
    .catch((error) => reject(error));
});

export default createAuthor;
