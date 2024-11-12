let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.btn-slide-next').addEventListener('click', function() {
    offset = offset + 503;
    if (offset > 1006) {
        offset = 0
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.btn-slide-prev').addEventListener('click', function() {
    offset = offset - 503;
    if (offset < 0) {
        offset = 1006
    }
    sliderLine.style.left = -offset + 'px';
});