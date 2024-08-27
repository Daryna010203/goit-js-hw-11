import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const searchFormBtn = document.querySelector('.js-search-form');
const galleryCards = document.querySelector('.js-gallery');

const onSearchFormSubmit = event => {
    event.preventDefault();
    const searchOfUsers = searchFormBtn.elements.user_query.value.trim();
    if (searchOfUsers === '') {
        alert('please enter your query into the search form')
    } else {
        fetch(`https://pixabay.com/api/?key=45521287-1fb3911845814b73b6d184262&q=${searchOfUsers}&image_type=photo&orientation=horizontal&safesearch=true`)
        .then(response => {
            if (!response.ok) {
              throw new Error(response.status);
            }
      
            return response.json();
          })
          .then(data => {
            console.log(data);      
            
          })
          .catch(err => {
            console.log(err);
          });
      };
      
    }
 

    

searchFormBtn.addEventListener('submit', onSearchFormSubmit);


