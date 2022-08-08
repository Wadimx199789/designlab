const headerTopContainer = document.querySelector(".header__top-container");
const labDesignBlock = document.querySelector(".lab");
const footerMenuLinks = document.querySelectorAll(".footer__menu-link");
const burger = document.querySelector(".header__burger");
const closeMenuButton = document.querySelector(".header__nav-close");
const headerNav = document.querySelector(".header__nav");
const headerTop = document.querySelector(".header__top-container");
const headerCloseBtn = document.querySelector(".header__nav-close");
const headerLinks = document.querySelectorAll(".header__nav-link");
const headerCall = document.querySelector(".header__call");
const headerLogo = document.querySelector(".logo");
const recentWorks = document.querySelector(".recentWorks");
const contact = document.querySelector(".contact")


function getCoords(block) {
  let box = block.getBoundingClientRect();
  return {
    top: box.top,
    left: box.left
  };
}


window.onscroll = function() {
    // We add pageYOffset for compatibility with IE.
    if (getCoords( headerTopContainer).top > getCoords(labDesignBlock).top && getCoords(recentWorks).top > getCoords( headerTopContainer).top) {
        headerLogo.classList.add("dark");
        headerCall.classList.add("dark");
        burger.classList.add("dark");

    } else {
        headerLogo.classList.remove("dark");
        headerCall.classList.remove("dark");
        burger.classList.remove("dark");

    }
    if(getCoords(headerLogo).top> getCoords(contact).top){
        headerLogo.classList.add("zero");
    }
   else{
        headerLogo.classList.remove("zero");
    }
   

    getCoords( headerTopContainer).top
};

for (let i = 0; i < footerMenuLinks.length; i++) {

    footerMenuLinks[i].addEventListener('click', function () {

        scrollMenu(this.getAttribute('href'));
    })

}



function scrollMenu(blockId) {
    let temp, start, from, to;
    //scroll animation
    cancelAnimationFrame(temp);
    start = performance.now();
    from = window.pageYOffset || document.documentElement.scrollTop;
    to = document.querySelector(blockId).getBoundingClientRect().top;
    const { height } = document.querySelector(blockId).getBoundingClientRect();

    // if (blockId === "#services") {
    //     to = document.querySelector(blockId).getBoundingClientRect().top - document.body.clientHeight + height;
    // }
    // else {
    to = document.querySelector(blockId).getBoundingClientRect().top;
    // }
    duration = 1000 * Math.abs(to) / 10000;

    // scroll
    requestAnimationFrame(function step(timestamp, e) {
        var progress = (timestamp - start) / duration;
        1 <= progress && (progress = 1);
        window.scrollTo(0, from + to * progress | 0);
        (1 > progress) ? temp = requestAnimationFrame(step) : (document.location.hash = blockId);
        document.addEventListener("wheel", function () {
            cancelAnimationFrame(temp);
        })
    })
}




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