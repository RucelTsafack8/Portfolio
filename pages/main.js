console.log("je suis un fou de la programmation!!!");

// code pour le menu derouland
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
menuBtn.addEventListener('click', ()=>{
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
    const action = document.querySelector(".active");
    if(action){
        menuBtn.innerHTML = "CLOSE";
    }else{
        menuBtn.innerHTML = "OPEN";
    }
});

// code pour le slide 

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".imageFtn");

var sliderNav = function(manual){
    btns.forEach((btn)=>{
        btn.classList.remove("active");

    });
    slides.forEach((slide)=>{
        slide.classList.remove("active");

    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
}
function currentSlide(n) {
    slides.forEach((slide, index) => {
        slide.style.display = 'none';
        if (index === n - 1) {
            slide.style.display = 'block';
        }
    });
}

btns.forEach((btn,i)=>{
    btn.addEventListener("click", ()=>{
        sliderNav(i);
    })
   
})


// read more booton

function readMore() {
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("readMoreBtn");

    if (moreText.style.display === "none") {
        btnText.innerHTML = "Read Less"; 
        moreText.style.display = "inline";
    } else {
        btnText.innerHTML = "Read More"; 
        moreText.style.display = "none";
    }
}