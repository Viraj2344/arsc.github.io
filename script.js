const images = document.querySelectorAll(".slider img");
let currentImage = 0;

function showImage(index) {
images[currentImage].classList.remove("active");
images[index].classList.add("active");
currentImage = index;
}

function nextImage() {
if (currentImage === images.length - 1) {
showImage(0);
} else {
showImage(currentImage + 1);
}
}

function prevImage() {
if (currentImage === 0) {
showImage(images.length - 1);
} else {
showImage(currentImage - 1);
}
}

const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

prevButton.addEventListener("click", prevImage);
nextButton.addEventListener("click", nextImage);

setInterval(nextImage, 5000);