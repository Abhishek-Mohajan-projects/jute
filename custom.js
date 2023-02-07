$(document).ready(function(){

    $('.banner-slider').slick({
        arrow: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        autoplay: true,
        adaptiveHeight: true,
        drag: true,
        prevArrow: '<div class="slick-arrow prev"><span class="fas fa-arrow-left"></span></div>',
        nextArrow: '<div class="slick-arrow next"><span class="fas fa-arrow-right"></span></div>'
    });

    const navMenu = document.getElementById('nav-menu')

    const toggleMenu = document.getElementById('toggle-menu')

    const closeMenu = document.getElementById('close-menu')

    toggleMenu.addEventListener('click', () => {
        navMenu.classList.toggle('show')
    })
    closeMenu.addEventListener('click', () => {
        navMenu.classList.remove('show')
    });


});

