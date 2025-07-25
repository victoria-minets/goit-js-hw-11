// import fetchData from './js/pixabay-api';
// import moduleName from './js/render-functions';

// У файлі main.js напиши всю логіку роботи додатка.Виклики нотифікацій
// iziToast, усі перевірки на довжину масиву в отриманій відповіді робимо
// саме в цьому файлі.Імпортуй в нього функції із файлів pixabay - api.js
// та render - functions.js та викликай їх у відповідний момент.

// const form = document.querySelector('.form');
// const list = document.querySelector('.gallery');

// form.addEventListener('submit', handleSubmit);

// getImagesByQuery(query);

import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '51439331-da55d8a3a0e541a7ddbda82f1';

function getImagesByQuery(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  axios(`${BASE_URL}/?${params}`)
    .then(res => {
      console.log(res.data.hits);

      // отримали масив об'єктів
    })
    .catch(error => {
      console.log(error);
    });
}

getImagesByQuery('Harry');
