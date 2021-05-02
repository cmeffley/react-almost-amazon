import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getAuthor = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/Authors.json`)
    .then((response) => resolve((Object.values(response.data))))
    .catch((error) => reject(error));
});

const createAuthor = (authorObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/Authors.json`, authorObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/Authors/${response.data.name}.json`, body)
        .then(() => {
          getAuthor().then((authorArray) => resolve(authorArray));
        });
    })
    .catch((error) => reject(error));
});

const deleteAuthor = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/Authors/${firebaseKey}.json`)
    .then(() => getAuthor().then((authorArray) => resolve(authorArray)))
    .catch((error) => reject(error));
});

const updateAuthor = (author) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/Authors/${author.firebaseKey}.json`, author)
    .then(() => getAuthor()).then((authorArray) => resolve(authorArray))
    .catch((error) => reject(error));
});

const getSingleAuthor = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/Authors/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export {
  createAuthor,
  getAuthor,
  deleteAuthor,
  updateAuthor,
  getSingleAuthor
};
