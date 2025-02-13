// Show / Hide Burgermenu

const burgerIcon = document.getElementById("burgermenu");
const showMenu = document.getElementById("showMenu");
const hideMenuIcon = document.getElementById("hideMenu");

burgerIcon.addEventListener("click", function() {
    showMenu.style.display = "block";
    populateImages();
});

hideMenuIcon.addEventListener("click", function(){
    showMenu.style.display = "none";
});

// Creating an array of objects to insert into my burgermenu
function populateImages () {

    const images = [
    {
        imagesrc: "clothes-image.webp",
        imagetitle: "Tøj"
    },
    {
        imagesrc: "shoes-image.webp",
        imagetitle: "Sko"
    },
    {
        imagesrc: "sport-image.webp",
        imagetitle: "Sport"
    },
    {
        imagesrc: "acc-image.webp",
        imagetitle: "Accesories"
    },
    {
        imagesrc: "desingermode-image.webp",
        imagetitle: "Designermode"
    },
    {
        imagesrc: "beauty-image.webp",
        imagetitle: "Beauty"
    },
    {
        imagesrc: "second-hand-image.webp",
        imagetitle: "Second Hand"
    },
    {
        imagesrc: "outlet-image.webp",
        imagetitle: "Outlet"
    }
];

const burgerImg = document.getElementsByClassName("placeholderimg");
const burgerCategoryName = document.getElementsByClassName("category-name");
    // for-loop har 3 parter
    //1 del. Definere loopet
    //2 del. er hvor længe vi skal kører loopet.
    //3 del. er hvad der skal ske, når loopet har kørt 1 gang.
    for (let i = 0; i < images.length; i++) {
        burgerImg[i].setAttribute('src', './images/' + images[i].imagesrc);
        burgerCategoryName[i].innerHTML = images[i].imagetitle;
        console.log(images[i].imagesrc);
        
    }
};