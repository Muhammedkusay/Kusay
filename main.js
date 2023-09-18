// menu bar
let menuList = document.querySelector("header .container ul");
let menuListItems = document.querySelectorAll("header .container ul li");
let menuBtn = document.querySelector("header .container .menu");

menuBtn.addEventListener("click", function() {
    menuList.classList.toggle("active");
    menuBtn.classList.toggle("active");
});

menuListItems.forEach((li) => {
    li.addEventListener("click", function() {
        menuList.classList.remove("active");
        menuBtn.classList.remove("active");
    })
});

// about cards background
let cards = document.querySelectorAll(".about .cards .card");

cards.forEach(card => {
    card.style.backgroundColor = card.getAttribute("bg");
});

// project box logo color
let logos = document.querySelectorAll(".projects .boxes .box i");

logos.forEach(logo => {
    logo.style.color = logo.getAttribute("logo-clr");
});


// theme

let theme = localStorage.getItem("theme");
let body = document.querySelector("body");
let themeBtn = document.querySelector(".theme-btn");

if(theme === null) {
    localStorage.setItem("theme", "light");
} else 
    checkTheme();

themeBtn.addEventListener("click", function() {

    body.classList.toggle("dark");
    themeBtn.classList.toggle("active");
    theme === "dark" ? localStorage.setItem("theme", "light") : localStorage.setItem("theme", "dark");

});

function checkTheme() {
    if(theme === "dark") {
        body.classList.add("dark");
        themeBtn.classList.add("active");
    } else {
        body.classList.remove("dark");
        themeBtn.classList.remove("active");
    }
}

// localStorage.clear();


// animate on scroll
let hiddenElements = document.querySelectorAll(".hidden");
let animateElements = document.querySelectorAll(".animatable");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if(entry.isIntersecting) {
            
            entry.target.classList.add("show");
            entry.target.classList.add("animate");

        } 
    });

});

hiddenElements.forEach(element => observer.observe(element));
animateElements.forEach(element => observer.observe(element));