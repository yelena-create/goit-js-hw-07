import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
// console.log(galleryEl);

const galleryListItem = ({ preview, original, description }) => {
    return `
    <li>
        <a class="gallery__item" href="${original}">
            <img class="gallery__image"
            src="${preview}" 
            alt = "${description}"
CX            />
        </a>
    </li>
`;
};
const galleryListItemMarkup = galleryItems.map(galleryListItem)
    .join('');
// console.log(galleryListItemMarkup);
galleryEl.insertAdjacentHTML('beforeend', galleryListItemMarkup);

// 
galleryEl.addEventListener('click', onGalleryClick );
let lightbox = new SimpleLightbox('.gallery a', {captionsData:'alt', captionDelay: 250} );

function onGalleryClick(evt) { 
    evt.preventDefault();


    galleryEl.addEventListener('keydown', onBigImgEscape);

    function onBigImgEscape(evt) {
        console.log(evt.code);
        if (evt.code === 'Escape') {
            instance.close();
    galleryEl.removeEventListener('keydown',onBigImgEscape);
        };
    }
};
    










