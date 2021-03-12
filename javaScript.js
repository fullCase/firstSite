const filter = document.getElementById("filter");
const button = document.getElementById("filterButton");
const button2 = document.getElementById("filterContainerButton");

window.addEventListener("scroll", scrollMenu);

function scrollMenu(){
    console.log("ggg");
    document.querySelector(".navbar").classList.toggle("fixed-top", window.scrollY > 290);
}

button.addEventListener("click", function(){
    console.log(window.innerWidth);
    if(window.innerWidth < 576){
        filter.classList.remove("d-none");
        filter.classList.toggle("on");
        console.log("ssss");
    }    
});

button2.addEventListener("click", function(){
    console.log(window.innerWidth);
    if(window.innerWidth < 576){
        filter.classList.remove("on");
        filter.classList.toggle("d-none");
        console.log("nnnn");
    }    
});
