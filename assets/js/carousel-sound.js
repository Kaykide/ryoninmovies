const videos = document.querySelectorAll(".video-slide video");
let currentVideo = videos[currentIndex];

function playVideo() {
  if (currentVideo) {
    currentVideo.play(1); // Putar video yang sedang terlihat
    currentVideo.muted = false; // Aktifkan suara video yang terlihat
  }
}

function pauseVideo() {
  if (currentVideo) {
    currentVideo.pause(); // Jeda video yang tidak terlihat
    currentVideo.muted = true; // Matikan suara video yang tidak terlihat
  }
}

videoCarousel.addEventListener("transitionend", () => {
  // Pemutaran video saat perpindahan slide selesai
  currentVideo = videos[currentIndex];
  playVideo();
});

// Ketika halaman dimuat, putar video pertama
playVideo();

// Fungsi untuk navigasi video selanjutnya
function nextVideo() {
  currentIndex = (currentIndex + 1) % videoDots.length;
  pauseVideo();
  updateCarousel();
}

// Fungsi untuk navigasi video sebelumnya
function prevVideo() {
  currentIndex = (currentIndex - 1 + videoDots.length) % videoDots.length;
  pauseVideo();
  updateCarousel();
}

// Fungsi yang akan mengaktifkan/tidak mengaktifkan suara saat tombol "M" ditekan
document.addEventListener("keydown", function (event) {
  if (event.key === "m" || event.key === "M") {
    if (currentVideo) {
      currentVideo.muted = !currentVideo.muted;
    }
  }
});
