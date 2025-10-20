document.addEventListener("DOMContentLoaded", function () {
  const slideshow = document.querySelector("#site-cssda .screenshots");
  if (!slideshow) return;

  const images = slideshow.querySelectorAll("img");
  let currentIndex = 0;

  // Mostrar la primera imagen
  images[0].classList.add("active");

  // Función para cambiar la imagen
  function nextImage() {
    images[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add("active");
  }

  // Cambiar imagen cada 4 segundos
  setInterval(nextImage, 4000);
});
