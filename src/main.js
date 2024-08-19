import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";
import { createGalleryCardTemplate } from './js/render-functions.js';
import { fetchPhotos } from './js/pixabay-api.js';

let lightbox = new SimpleLightbox('.gallery a', {
    navText: ['<', '>'],
    captionPosition: 'bottom',
    captionsData: 'alt',
    captionDelay: 250,
    enableKeyboard: true,
    closeText: 'x',
    showCounter: true,
    overlayOpacity: 0.8
});
const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
 
const onSearchFormSubmit = event => {
  event.preventDefault();

  const searchedValue = searchFormEl.elements.user_query.value;

  fetchPhotos(searchedValue)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });

          galleryEl.innerHTML = '';
         
        searchFormEl.reset();

        return;
      }

      const galleryCardsTemplate = data.hits.map(imgDetails => createGalleryCardTemplate(imgDetails)).join('');

        galleryEl.innerHTML = galleryCardsTemplate;

        lightbox.refresh();
        
        
    })
    .catch(err => {
      console.log(err);
    });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);


    