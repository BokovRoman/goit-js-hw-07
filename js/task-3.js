const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryListRef = document.querySelector('#gallery');
// console.log(galleryListRef);

// 1st method
// const makeGallMarkUp = (images) => {
//     return `
//     <li class="picture-item">
//         <img src="${images.url}" alt="${images.alt}>"
//     </li>
//     `;
// };

const makeGallMarkUp = ({url,alt}) => {
    return `
    <li class="picture-item">
        <img src="${url}" alt="${alt}>"
        </li>
    `;
};

const makeGallery = images
    .map(makeGallMarkUp)
    .join('');
// console.log(makeGallery);
galleryListRef.insertAdjacentHTML('beforeend', makeGallery);





// 2st method
// const makeGallMarkUp = image => {

//         const itemEl = document.createElement('li');
//         itemEl.classList.add('picture-item');
//         const imageItem = document.createElement('img');
//         imageItem.src = image.url;
//         imageItem.alt = image.alt;
//         itemEl.append(imageItem);

//         return itemEl;
// };

// console.log(makeGallMarkUp(images[0]));

// const makeGallery = images.map(makeGallMarkUp);
// galleryListRef.append(...makeGallery);
