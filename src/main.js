import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const searchFormBtn = document.querySelector('.js-search-form');
const galleryCards = document.querySelector('.js-gallery');

const onSearchFormSubmit = event => {
    event.preventDefault();

    console.log(searchFormBtn.elements.user_query.value);
}
searchFormBtn.addEventListener('submit', onSearchFormSubmit);


