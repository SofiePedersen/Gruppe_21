let slideIndex = 1;
let slideInterval;

//array med farveskift 
const colors = ["#C46318", "#F0ECC9", "#F19406", "#EBD077"];

//lytter til DOM er læst
document.addEventListener ("DOMContentLoaded", function () {
    showSlide(slideIndex);
    startAutoSlide(); //starter automatisk skift   
});

// NEXT & PREV
function plusSlides (n) {
    showSlide (slideIndex +=n);
    resetAutoSlide (); //nulstiller autoslide ved brugerklik
}

//SLIDESHOW + BAGGRUNDS FARVE
function showSlide (n) {
    let slides = document.getElementsByClassName ("model");
    let container = document.querySelector (".slide__container");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    //for-loop
    for (let i = 0; i < slides.length; i++) {
        slides [i].style.display = "none";
    }

    slides [slideIndex - 1].style.display = "block";

    //skifter farve basseret på billedet
    container.style.backgroundColor = colors [(slideIndex - 1) % colors.length];
}

//AUTO SKIFT
function startAutoSlide () {
    slideInterval = setInterval(function () {
        plusSlides (1);
    }, 10000); //tid mellem skift
}


//NULSTIL INTERVAL
function resetAutoSlide () {
    clearInterval (slideInterval); //stopper gammelt interval
    startAutoSlide(); //starter nyt interval efter klik
}

//plusSlides globalt tilgængelig
window.plusSlides = plusSlides; //globalt
