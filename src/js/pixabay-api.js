const BASE_URL = 'https://pixabay.com';

export const fetchPhotos = searchQ => {
  const urlParams = new URLSearchParams({
    key: '45521287-1fb3911845814b73b6d184262',
    q: searchQ,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  fetch(`${BASE_URL}/api/?${urlParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};
