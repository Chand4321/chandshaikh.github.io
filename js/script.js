function myFunction() {
    var x = document.getElementById("myDIV1");
    var w = document.getElementById("work_data");
    var z = document.getElementById("edu_data");
    var y = document.getElementById("myDIV2");
    w.style.fontSize = "1rem"
    w.style.opacity = "0.3"

    z.style.fontSize = "2rem"
    z.style.opacity = "1"

    x.style.display = "block"
    y.style.display = "none"
}

function myFunction_() {
    var x = document.getElementById("myDIV2");
    var z = document.getElementById("work_data");
    var w = document.getElementById("edu_data");
    var y = document.getElementById("myDIV1");

    w.style.fontSize = "1rem"
    w.style.opacity = "0.3"

    z.style.fontSize = "2rem"
    z.style.opacity = "1"

    x.style.display = "inline-flex"
    y.style.display = "none"
}

// _____________Slider
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}