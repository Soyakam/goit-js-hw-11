import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';

const searchForm = document.getElementById('search-form');
const inputQuery = document.getElementById('search-input');

searchForm.addEventListener('submit', e => {
  e.preventDefault();
  const query = inputQuery.value.trim();
  if (query) {
    fetchImages(query)
      .then(data => {
        if (data.hits.length === 0) {
          iziToast.error({
            title: 'Error',
            message: `Error: No such pictures!`,
            position: 'topRight',
          });
        } else {
          renderImages(data);
        }
      })
      .catch(error => {
        console.error(error);
        iziToast.error({
          title: 'Error',
          message: `An error occurred while loading images. Please try again later.`,
          position: 'topRight',
        });
      });
  }
});