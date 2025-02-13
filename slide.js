let slideIndex = 1; //global variabel - let fordi det ændres
let slideInterval; // global variabel

//array med farveskift (liste)
const colors = ["#C46318", "#F0ECC9", "#F19406", "#EBD077"]; //const skal ikke kunne ændres

//venter til window er læst
window.onload = function () {
    let container = document.querySelector (".slide__container");

    //tilføjer no transition klasse til container på første læs
    container.classList.add ("no-transition");

    showSlide(slideIndex); //når siden er læst, vises første slide
    startAutoSlide(); //starter automatisk skift 
    
    //fjern no transition klasse efter første slide er vist
    setTimeout (function() {
        container.classList.remove ("no-transition");
    }, 100);
};

// NEXT & PREV
function plusSlides (n) {
    showSlide (slideIndex +=n); //let ændres første gang her
    resetAutoSlide (); //nulstiller autoslide ved brugerklik
}

//SLIDESHOW + BAGGRUNDS FARVE
function showSlide (n) { //ændrer slide, ved at lægge n til 
    let slides = document.getElementsByClassName ("model"); //lokal variabel
    let container = document.querySelector (".slide__container"); 
    
    //boolske operatorer
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    //for-loop
    for (let i = 0; i < slides.length; i++) {
        slides [i].classList.remove("active");
        slides [i].style.visibility = "hidden";
        slides [i].style.opacity ="0";
        slides [i].style.position = "absolute";
    }
    
    slides [slideIndex - 1].classList.add ("active");
    slides [slideIndex - 1].style.visibility = "visible";
    slides [slideIndex - 1].style.opacity = "1";
    slides [slideIndex - 1].style.position = "relative";

    //skifter farve basseret på billedet, modulos = rest 
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
