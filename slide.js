let slideIndex = 1;
let slideInterval;

document.addEventListener ("DOMContentLoaded", function () {
    showSlide(slideIndex);
    startAutoSlide(); //starter automatisk skift   
});

// NEXT & PREV
function plusSlides (n) {
    showSlide (slideIndex +=n);
    resetAutoSlide (); //nulstiller autoslide ved brugerklik
}

//SLIDESHOW
function showSlide (n) {
    let slides = document.getElementsByClassName ("model");
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides [i].style.display = "none";
    }

    slides [slideIndex - 1].style.display = "block";
}

//AUTO SKIFT
function startAutoSlide () {
    slideInterval = setInterval(function () {
        plusSlides (1);
    }, 10000);
}


//NULSTIL INTERVAL
function resetAutoSlide () {
    clearInterval (slideInterval); //stopper gammelt interval
    startAutoSlide(); //starter nyt interval efter klik
}

//plusSlides globalt tilgængelig
window.plusSlides = plusSlides;
