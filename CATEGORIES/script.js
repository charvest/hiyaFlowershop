// sidebar
document
  .querySelector(".sidebar-toggle")
  .addEventListener("click", function () {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.left === "-250px") {
      sidebar.style.left = "0px";
    } else {
      sidebar.style.left = "-250px";
    }
  });
// slidershow
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.querySelectorAll(".slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].classList.remove("active");
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].classList.add("active");
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}