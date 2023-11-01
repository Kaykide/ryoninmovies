const videoCarousel = document.querySelector(".video-carousel");
const videoDots = document.querySelectorAll(".video-dot");

let currentIndex = 0;

videoDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateCarousel();
  });
});

function updateCarousel() {
  const translateX = -currentIndex * 10; // 10% per video
  videoCarousel.style.transform = `translateX(${translateX}%)`;

  videoDots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function nextVideo() {
  currentIndex = (currentIndex + 1) % videoDots.length;
  updateCarousel();
}

function prevVideo() {
  currentIndex = (currentIndex - 1 + videoDots.length) % videoDots.length;
  updateCarousel();
}

updateCarousel();
