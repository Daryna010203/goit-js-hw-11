import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { createGalleryCardTemplate } from './js/render-functions';
import { fetchPhotos } from './js/pixabay-api';

const searchFormBtn = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');

const onSearchFormSubmit = event => {
  event.preventDefault();
  const searchOfUsers = searchFormBtn.elements.user_query.value.trim();
  if (searchOfUsers === '') {
    iziToast.show({
      message: 'Please enter something to search',
      messageColor: '#fafafb',
      messageSize: '16px',
      messageLineHeight: '150%',
      backgroundColor: '#59a10d',
      position: 'topRight',
      maxWidth: 432,
    });
  } else {
    fetchPhotos(searchOfUsers)
      .then(data => {
        if (data.total === 0) {
          iziToast.error({
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            messageColor: '#fafafb',
            messageSize: '16px',
            messageLineHeight: '150%',
            backgroundColor: '#ef4040',
            position: 'topRight',
            maxWidth: 432,
          });
          galleryEl.innerHTML = '';
          searchFormBtn.reset();
          return;
        }
        console.log(data);
        const galleryCardsTemplate = data.results

          .map(imgDetails => createGalleryCardTemplate(imgDetails))
          .join('');

        galleryEl.innerHTML = galleryCardsTemplate;
      })
      .catch(err => {
        console.log(err);
      });
  }
};

searchFormBtn.addEventListener('submit', onSearchFormSubmit);
