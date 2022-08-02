const burger = document.querySelector(".header__burger");
const closeMenuButton = document.querySelector(".header__nav-close");
const headerNav = document.querySelector(".header__nav");
const headerTop = document.querySelector(".header__top-container");
const headerCloseBtn = document.querySelector(".header__nav-close");
const headerLinks = document.querySelectorAll(".header__nav-link");


headerLinks.forEach((link)=>{
    link.addEventListener("click",()=>{
        burger.classList.remove("active");
        headerNav.classList.remove("active");
        headerTop.classList.remove("top");
    })
})
burger.addEventListener("click",()=>{
    console.log("click")
    burger.classList.toggle("active");
    if(burger.classList.contains("active")){
        headerNav.classList.add("active");
        headerTop.classList.add("top");
    }
    else{
        headerNav.classList.remove("active"); 
        headerTop.classList.remove("top");
    }
});
headerCloseBtn.addEventListener("click",()=>{
    burger.classList.remove("active");
    headerNav.classList.remove("active");
    headerTop.classList.remove("top");
});


// document.addEventListener('click', function(event) {
//     if (!headerNav.contains(event.target)){
//         burger.classList.remove("active");
//         headerNav.classList.remove("active");
//         headerTop.classList.remove("top");
//     }
//   });

console.log(burger)