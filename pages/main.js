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



let User = document.getElementById('username');
let Email = document.getElementById('email');
let Message = document.getElementById('message');

const btn = document.getElementById('btn-send');
btn.addEventListener("click", (e)=>{
    e.preventDefault();
    let user_name = User.value;
    let user_email = Email.value;
    let user_message = Message.value;


    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    console.log(regex.test(user_email))

    if(user_name=="" || regex.test(user_email)==false || user_message==""){
        alert("verifier tous vos informations");
    }else{
        alert("vous informations ont ete biens recu !!!");
    }
})