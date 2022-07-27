const servicesOpenButton = document.querySelector(".services-open-button");
const servicesListHide = document.querySelector(".services-list-hide");

servicesOpenButton.addEventListener("click", function(){
    this.classList.toggle("active");
    this.classList.contains("active")?servicesListHide.style.maxHeight=1000 + "px":servicesListHide.style.maxHeight=null;
})