


document.addEventListener("DOMContentLoaded", function() {
var cards = document.querySelectorAll('.card');

cards.forEach(function(card) {
  card.addEventListener('click', function() {
    // Remove 'active' from all cards
    cards.forEach(c => c.classList.remove('active'));

    // Add 'active' to the clicked card
    card.classList.add('active');
  });
});
});





var swiper = new Swiper(".slide-content", {
slidesPerView: 3,
spaceBetween: 25,
loop: true,
centerSlide: true, // corrected from 'centerSlide'
fade: true, // corrected from 'fade'
grabCursor: true, // corrected from 'gragCursor'
pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true, // corrected from 'dynamicBullets'
},
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},
breakpoints: {
  0: {
    slidesPerView: 1,
  },
  520: {
    slidesPerView: 2,
  },
  950: {
    slidesPerView: 3,
  }
},
});