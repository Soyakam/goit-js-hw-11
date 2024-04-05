
import { galleryList } from '../main';


export function fetchImages(query) {
  query = encodeURIComponent(query);
  galleryList.innerHTML = `<div class="loader"></div>`;
  return fetch(
    `https://pixabay.com/api/?key=43032370-bcf3e6db34194155efa6e28b4&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}