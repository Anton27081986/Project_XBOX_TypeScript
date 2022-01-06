let offset = 0;
const sliderLine = document.querySelector('.slider-cards-line');

document.querySelector('.exclusive-games__icon-next').addEventListener('click', () => {
    offset += 320;
    if (offset > 960) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.exclusive-games__icon-prev').addEventListener('click', () => {
    offset -= 320;
    if (offset < 0) {
        offset = 960;
    }
    sliderLine.style.left = -offset + 'px';
});
