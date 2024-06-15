const images = [{
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

// Selectăm lista de galerie
const galleryList = document.querySelector('.gallery');

// Creăm markup-ul pentru fiecare imagine și le concatenăm
const galleryItemsMarkup = images.map(image =>
    `<li>
      <img src="${image.url}" alt="${image.alt}">
    </li>`
).join('');

// Adăugăm toate elementele <li> create în listă dintr-o singură operațiune
galleryList.insertAdjacentHTML('beforeend', galleryItemsMarkup);

// Pentru verificare, adăugăm un mesaj în consolă
console.log('Galeria de imagini a fost creată.');;