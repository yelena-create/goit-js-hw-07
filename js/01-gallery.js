import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
// console.log(galleryEl);

const galleryListItem = ({ preview, original, description }) => {
    return `
    <div class="gallery__item">
      <a href="${original}" class="gallery__link">
        <img src="${preview}" 
        alt="${description}" 
        class="gallery__image" 
        data-source="${original}"
        />
      </a>
    </div>
`;
};
const galleryListItemMarkup = galleryItems.map(galleryListItem)
    .join('');
// console.log(galleryListItemMarkup);
galleryEl.insertAdjacentHTML('beforeend', galleryListItemMarkup);

// const galleryImage = document.querySelector('.gallery__image');
// const galleryLink = document.querySelector('.gallery__link');
// const galleryItem = document.querySelector('.gallery__item');

galleryEl.addEventListener('click', onGalleryClick, );

function onGalleryClick(evt) { 
    evt.preventDefault();
    // console.log(`запрет перехода на другую страницу`);
    const bigImg = evt.target.dataset.source;
    // console.log(bigImg);
    const instance = basicLightbox.create(`
	<img src = '${bigImg}'>
`)
    instance.show();

    galleryEl.addEventListener('keydown', onBigImgEscape);

    function onBigImgEscape(evt) {
        console.log(evt.code);
        if (evt.code === 'Escape') {
            instance.close();
    galleryEl.removeEventListener('keydown',onBigImgEscape);

        };
    }
    
};











