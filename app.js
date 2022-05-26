// <!-- //Header Section// -->
const menuIcon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.nav-bar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('change');
})

const swiper = new Swiper('.swiper', {


    autoplay: {

        delay: 3000,
        disableOnInteraction:false,
    },

    loop: true,


    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },


    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});