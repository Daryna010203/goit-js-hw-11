import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchFormBtn = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');

const createGalleryCardTemplate = imgInfo => {
  return `
  <li class="gallery-item">
	<a class="gallery-link" href="${imgInfo.largeImageURL}">
		<img 
			class="gallery-image" 
			src="${imgInfo.webformatURL}" 
			alt="${imgInfo.tags}" 
			/>
	</a>
  <div class='js-wraper'>
    <div>
      <h4 class='wraper-title'>Likes</h4>
      <p class='wraper-text'>${imgInfo.likes}</p>
    </div>
    <div>
      <h4 class='wraper-title'>Views</h4>
      <p class='wraper-text'>${imgInfo.views}</p>
    </div>
    <div>
     <h4 class='wraper-title'>Comments</h4>
      <p class='wraper-text'>${imgInfo.comments}</p>
    </div>
    <div>
      <h4 class='wraper-title'>Downloads</h4>
      <p class='wraper-text'>${imgInfo.downloads}</p>
    </div>
  </div>
</li>
  `;
};

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
    fetch(
      `https://pixabay.com/api/?key=45521287-1fb3911845814b73b6d184262&q=${searchOfUsers}&image_type=photo&orientation=horizontal&safesearch=true`
    )
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }

        return response.json();
      })
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
        } else {
          console.log(data);

          const galleryCardsTemplate = data.results
            .map(imgDetails => createGalleryCardTemplate(imgDetails))
            .join('');

          galleryEl.innerHTML = galleryCardsTemplate;
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};

searchFormBtn.addEventListener('submit', onSearchFormSubmit);
