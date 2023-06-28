/* Menu */

const hamburger = document.querySelector('.hamburger');
const headerNav = document.querySelector('.header__nav');
const overlay = document.querySelector('.overlay');
const closeIco = document.querySelector('.close-icon');

const handleClick = (event) => {   
    hamburger.classList.toggle('hamburger_active');
	headerNav.classList.toggle('header__nav_active');
	overlay.classList.toggle('active');
	closeIco.classList.toggle('close-icon_active');
	document.body.classList.toggle('locked');
    }

if (hamburger){
	hamburger.addEventListener('click', handleClick)
}
if (overlay) {
	overlay.addEventListener('click', handleClick)
}
if (closeIco) {
	closeIco.addEventListener('click', handleClick)
}

/* PopUp */

const testimonialCards = document.querySelectorAll('.testimonials__card');
const closePopupButtons = document.querySelectorAll('.testimonials_close-icon');
const overlayPopup = document.querySelector('.popup_overlay');



testimonialCards.forEach((testimonialCard) => {
		testimonialCard.addEventListener('click', () => {
				testimonialCard.classList.add('active_card');
				overlayPopup.classList.add('active_card');
				closePopupButtons.forEach((closePopupButton) => {
					closePopupButton.classList.add('active_card');
				})
		})
		document.addEventListener('click', (event) => {
			if(event.target === overlayPopup) { 
				testimonialCard.classList.remove('active_card'); 
				overlayPopup.classList.remove('active_card'); 
			}
		})	
      
		})
        closePopupButtons.forEach((closePopupButton) => {
            document.addEventListener('click', (event) => {
                if(event.target === overlayPopup) { 
                    overlayPopup.classList.remove('active_card'); 
                    closePopupButton.classList.remove('active_card');
                }
            });
            closePopupButton.addEventListener('click', (event) => {
                testimonialCards.forEach((testimonialCard) => {
                    testimonialCard.classList.remove('active_card'); 
                })
                overlayPopup.classList.remove('active_card');      
        })
        })
	
/* Slider Testimonials */
const testimonialsRange = document.querySelector('.input-range');
const testimonialsAll = document.querySelector('.tesimonials__cards');
const testimonialsContainer = document.querySelector('.testimonials__card');

	testimonialsRange.addEventListener('input', () => {
		testimonialsRange.max = (window.matchMedia('(max-width: 1200px)').matches) ? '9' : '8';
		let value = testimonialsRange.value;
		let move = -(testimonialsContainer.offsetWidth + 28) * (value - 1);
		testimonialsAll.style.marginLeft = move + 'px';
	});
	window.addEventListener('resize', () => {
		if (window.innerWidth < 641) {
			testimonialsAll.style.marginLeft = 0 + 'px';
		}})

/* Slider Pets*/
const animals = [
    {
        "id": "card-pandas",
        "img": "../../assets/images/pandas.jpg",
        "name": "Giant Pandas",
        "home": "Native to Southwest China",
        "icon": "../../assets/icons/banana-bamboo-icon.svg",
    },
    {
        "id": "card-eagles",
        "img": "../../assets/images/eagles.jpg",
        "name": "Eagles",
        "home": "Native to South America",
        "icon": "../../assets/icons/meet-fish-icon.svg",
    },
    {
        "id": "card-gorillas",
        "img": "../../assets/images/gorillas.jpg",
        "name": "Gorillas",
        "home": "Native to Congo",
        "icon": "../../assets/icons/banana-bamboo-icon.svg",
    },
    {
        "id": "card-sloth",
        "img": "../../assets/images/sloth.jpg",
        "name": "Two-toed Sloth",
        "home": "Mesoamerica, South America",
        "icon": "../../assets/icons/banana-bamboo-icon.svg",
    },
    {
        "id": "card-cheetahs",
        "img": "../../assets/images/cheetahs.jpg",
        "name": "Cheetahs",
        "home": "Native to Africa",
        "icon": "../../assets/icons/meet-fish-icon.svg",
    },
    {
        "id": "card-penguins",
        "img": "../../assets/images/penguins.jpg",
        "name": "Penguins",
        "home": "Native to Antarctica",
        "icon": "../../assets/icons/meet-fish-icon.svg",
    },
    {
        "id": "card-parrot",
        "img": "../../assets/images/parrot.jpg",
        "name": "Parrots",
        "home": "Native to Africa",
        "icon": "../../assets/icons/banana-bamboo-icon.svg",
    },
	{
        "id": "card-alligator",
        "img": "../../assets/images/alligator.jpg",
        "name": "Alligators",
        "home": "Native to Africa",
        "icon": "../../assets/icons/meet-fish-icon.svg",
    },
	{
        "id": "card-kangaroo",
        "img": "../../assets/images/kangaroo.jpg",
        "name": "Kangaroos",
        "home": "Native to Africa",
        "icon": "../../assets/icons/banana-bamboo-icon.svg",
    },

];

let screenWidth = document.body.clientWidth; 

function pagination() {
    function Slides() {
        let collectionAll = [];
        if (screenWidth >= 900) {
            let sizeCollection = 6;
            let pages = 3;
            for (i = 0; i < pages; i++) {
                let collection = new Set();
                while (collection.size < sizeCollection) {
                    let randomIndex = Math.floor(Math.random() * animals.length);
                    collection.add(randomIndex)
                }
                collectionAll.push([...collection]) //создаем массив из 3 подмассивов по 6 карточек
            }
        } else if (screenWidth < 889 && screenWidth >= 290) {
            let sizeCollection = 4;
            let pages = 3;
            for (i = 0; i < pages; i++) {
                let collection = new Set();
                while (collection.size < sizeCollection) {
                    let randomIndex = Math.floor(Math.random() * animals.length);
                    collection.add(randomIndex)
                }
                collectionAll.push([...collection]) //создаем массив из 3 подмассивов по 4 карточКи
            }
        }
        addSlidesInner(collectionAll, newCollection);
    };
    
    let newCollection = [];
    let slider1 = document.body.querySelector(".slider-1");
    let slider2 = document.body.querySelector(".slider-2");
    let slider3 = document.body.querySelector(".slider-3");
    Slides();
    slider1.innerHTML = newCollection.slice(0, 1).join('');
    slider2.innerHTML = newCollection.slice(1, 2).join('');
    slider3.innerHTML = newCollection.slice(2, 3).join('');
    
    let repeats = []; //проверка на повторение и перемешку карточек на странице
    newCollection.forEach(el => {
    repeats.push(el.toString().match(/\d/g))
    });
    
    function addSlidesInner(collectionAll, newCollection) {
        collectionAll.forEach(item => {
            let slidesInner = "";
            item.forEach(i => {
                slidesInner += `<article class="pet" id="${animals[i].id}"> <img src="${animals[i].img}" alt="pet" class="pet__image" width="366" height="366"> <div class="pet__content"> <div class="pet__description"> <p class="pet__name">${animals[i].name}</p> <p class="pet__home">${animals[i].home}</p> </div> <div class="pet__icon"> <img src="${animals[i].icon}" alt="icon"> </div> </div> </article>`
			});
            newCollection.push([slidesInner]);
        })
    };
} pagination();

const btnLeft = document.querySelector(".pet__button-left");
const btnRight = document.querySelector(".pet__button-right");
let carousels = document.querySelectorAll(".pets__slider");
let currentCarousel = 0;
let isDisplay = true;

function changeCurrentCarousel(n) {
    currentCarousel = (n + carousels.length) % carousels.length;
}
function hideCarousel(direction) {
    isDisplay = false;
    carousels[currentCarousel].classList.add(direction);
    carousels[currentCarousel].addEventListener('animationend', function() {
        this.classList.remove('active', direction);
    });
}
function showCarousel(direction) {
    carousels[currentCarousel].classList.add('next', direction);
    carousels[currentCarousel].addEventListener('animationend', function() {
        this.classList.remove('next', direction);
        this.classList.add('active');
        isDisplay = true;
    });
}
function previousCarousel(n) {
    hideCarousel('to-right');
    changeCurrentCarousel(n - 1);
    showCarousel('from-left');
}
function nextCarousel(n) {
    hideCarousel('to-left');
    changeCurrentCarousel(n + 1);
    showCarousel('from-right');
}
btnLeft.addEventListener('click', function() {
    if (isDisplay) {
        pagination();
        previousCarousel(currentCarousel);
    }
});
btnRight.addEventListener('click', function() {
    if (isDisplay) {
        nextCarousel(currentCarousel);
        pagination();
    }
});



	// alert('Привет, если читаешь это сообщение, пожалуйста, пока не проверяй мою работу, я её хочу доработать, из-за того что заболела, не успеваю, спасибо! :)')