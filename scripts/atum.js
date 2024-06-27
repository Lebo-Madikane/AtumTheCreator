const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.right = '0';
}
function close() {
    mainMenu.style.right = '-100vh';
}

const parentContainer = document.querySelector('.bg-layer');

parentContainer.addEventListener('click', event => {
    const current = event.target;

    const isToggleButton = current.classList.contains('toggleButton');

    if (!isToggleButton) return;

    const seeMoreServices = document.querySelectorAll('.seeMoreService');

    seeMoreServices.forEach(service => {
        service.classList.toggle('seeMoreService--show');
    });

    current.textContent = current.textContent.includes('See Less') ? "See More" : "See Less";
});


var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        480: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        640: {
            slidesPerView: 4,
            spaceBetween: 30
        }
    }
});