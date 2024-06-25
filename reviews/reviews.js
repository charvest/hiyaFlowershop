function setRating(value) {
  const starRatingDiv = document.querySelector(".star-rating");
  starRatingDiv.setAttribute("data-rating", value.toString());
  updateStars();
}

function updateStars() {
  const rating = parseFloat(
    document.querySelector(".star-rating").getAttribute("data-rating")
  );
  document.querySelectorAll(".star-rating .star").forEach((star, index) => {
    star.style.color = index + 1 <= rating ? "gold" : "lightgray";
  });
}

// Example of setting the rating, this could be dynamically called
setRating(5.0); // Set this value based on your application needs

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 70,
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
    530: {
      slidesPerView: 2,
    },
    980: {
      slidesPerView: 3,
    },
  },
});
