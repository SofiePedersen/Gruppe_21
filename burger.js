// Show / Hide Burgermenu

const burgerIcon = document.getElementById("burgermenu");
const showMenu = document.getElementById("showMenu");
const hideMenuIcon = document.getElementById("hideMenu");

burgerIcon.addEventListener("click", function() {
    showMenu.style.display = "block";
});

hideMenuIcon.addEventListener("click", function(){
    showMenu.style.display = "none";
});

// Creating an array of objects to insert into my burgermenu
window.onload = function () {

    const images = [
    {
        imagesrc: "clothes-image.webp",
        imagetitle: "Tøj"
    },
    {
        imagesrc: "clothes-image.webp",
        imagetitle: "Tøj"
    },
    {
        imagesrc: "clothes-image.webp",
        imagetitle: "Tøj"
    },
    {
        imagesrc: "clothes-image.webp",
        imagetitle: "Tøj"
    },
    {
        imagesrc: "clothes-image.webp",
        imagetitle: "Tøj"
    },
    {
        imagesrc: "clothes-image.webp",
        imagetitle: "Tøj"
    },
    {
        imagesrc: "clothes-image.webp",
        imagetitle: "Tøj"
    },
    {
        imagesrc: "clothes-image.webp",
        imagetitle: "Tøj"
    },
];

const burgerImg = document.getElementsByClassName("placeholderimg");
const burgerCategoryName = document.getElementsByClassName("category-name");
    // for-loop har 3 parter
    //1 del. Definere loopet
    //2 del. er hvor længe vi skal kører loopet.
    //3 del. er hvad der skal ske, når loopet har kørt 1 gang.
    for (let i = 0; i < images.length; i++) {
        burgerImg[i].setAttribute('src', "./images/" + images[i].imagesrc);
        burgerCategoryName[i].innerHTML = images[i].imagetitle;
    }
};