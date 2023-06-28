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

/* Amount */

const inputNumber = document.querySelector('.donate__another-amount');
const radioBtn = document.querySelectorAll('.radio-btn-money');
const radioInput = document.querySelectorAll('.radio-item');
const labelBorder = document.querySelectorAll('.label-border');
const dollar = document.querySelectorAll('.label-item');

for(let i = 0; i < radioInput.length; i++) {
    inputNumber.value = 100;
    radioInput[i].addEventListener('click', (event) => {
        inputNumber.value = event.target.id;
        labelBorder.forEach((el) => {
            el.classList.remove('active-checked');
        })
        dollar.forEach((el) => {
            el.classList.remove('active-checked');
        })

        labelBorder[i].classList.add('active-checked');
        dollar[i].classList.add('active-checked');
        })

    inputNumber.addEventListener('input', () => {
    labelBorder.forEach((el) => {
        el.classList.remove('active-checked');
    })

    dollar.forEach((el, i) => {
        el.classList.remove('active-checked');
        if (inputNumber.value == el.textContent.slice(1, el.textContent.length)) {
            dollar.forEach((el) => {
                el.classList.remove('active-checked');
            });
            el.classList.add('active-checked');
        }
        labelBorder.forEach((elem, j) => {
            if (inputNumber.value == el.textContent.slice(1, el.textContent.length) && i === j) {
                labelBorder.forEach((el) => {
                    elem.classList.remove('active-checked');
                });
                elem.classList.add('active-checked');
            }
        })
    })
})
}

function active(event) {
    labelBorder.forEach((elem, i) => {
        elem.addEventListener(event, () => {
            labelBorder.forEach((el) => {
                el.classList.remove('active-checked');
            })
            dollar.forEach((el) => {
                el.classList.remove('active-checked');
            })
            elem.classList.add('active-checked');
            dollar.forEach((elem, j) => {
                if (i == j) {
                    elem.classList.add('active-checked');
                    inputNumber.value = Number(dollar[j].textContent.slice(1, dollar[j].textContent.length))
                }
            })
        })
    })
}
active('click');
