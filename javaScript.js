const filter = document.getElementById("filter");
const button = document.getElementById("filterButton");
const buttonInFilter = document.getElementById("buttonInFilter");

window.addEventListener("scroll", scrollMenu);

function scrollMenu(){
    document.querySelector(".navbar").classList.toggle("fixed-top", window.scrollY > 290);
}

