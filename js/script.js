const galleryWrapper = document.querySelector('.gallery-wrapper');
const slides = document.querySelectorAll('.gallery-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
const totalSlides = slides.length;

function updateGallery() {
    const offset = -currentIndex * 100;
    galleryWrapper.style.transform = `translateX(${offset}%)`;
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateGallery();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateGallery();
});

// Auto-scroll
setInterval(() => {
    nextBtn.click();
}, 3000);