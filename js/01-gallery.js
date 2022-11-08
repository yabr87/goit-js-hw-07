import { galleryItems } from './gallery-items.js';

const galleryListItem = document.querySelector('.gallery');

//add markup________________________________________
const createGalleryListItem = galleryItems
  .map(
    ({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  )
  .join('');

galleryListItem.insertAdjacentHTML('afterbegin', `${createGalleryListItem}`);
//___________________________________________________

// open modal Lightbox

galleryListItem.addEventListener('click', onImageClick);

function onImageClick(image) {
  image.preventDefault();
  if (image.target === image.currentTarget) return;

  const modalLightbox = basicLightbox.create(
    `<img src="${image.target.dataset.source}">`
  );

  modalLightbox.show();

  document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
      modalLightbox.close();
    }
  });
}
//____________________________________________________
