// Carousel functionality
document.addEventListener('DOMContentLoaded', function () {
    const track = document.getElementById('carousel-track');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    // Exit early if carousel elements don't exist on this page
    if (!track || !prevBtn || !nextBtn) return;

    const slides = Array.from(track.children);
    let currentIndex = 0;

    function updateCarouselPosition() {
        // Calculates the shift percentage (e.g., Index 1 shifts -100%, Index 2 shifts -200%)
        const amountToMove = currentIndex * -100;
        track.style.transform = `translateX(${amountToMove}%)`;
    }

    nextBtn.addEventListener('click', () => {
        // If at the end, loop back to the first slide, otherwise advance
        currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
        updateCarouselPosition();
    });

    prevBtn.addEventListener('click', () => {
        // If at the beginning, loop to the last slide, otherwise go back
        currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
        updateCarouselPosition();
    });
});
