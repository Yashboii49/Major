const slides = document.querySelectorAll(".slide");
let counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const goPrev = () => {
    if (counter === 0) {
        counter = slides.length - 1; // Set counter to index of last image when on the first image
    } else {
        counter--;
    }
    slideImage();
};

const goNext = () => {
    counter++;
    if (counter === slides.length) {
        counter = 0; // Reset counter to 0 when reaching the end
    }
    slideImage();
};

const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};
