const filter = document.getElementById("filter");
const filterButton = document.getElementById("filterButton");
const buttonInFilter = document.getElementById("buttonInFilter");

window.addEventListener("scroll", scrollMenu);

filterButton.addEventListener("click", function(){
    filter.classList.add("filter_popup");
});

function scrollMenu(){
    document.querySelector(".navbar").classList.toggle("fixed-top", window.scrollY > 290);
}

