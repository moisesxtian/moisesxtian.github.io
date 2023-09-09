var loader=document.querySelector(".preloader");
window.addEventListener("load",function(){
loader.style.display="none";
})
function toggleMenu(){
 const menu=document.querySelector(".side-nav-container");
 menu.classList.toggle("open");
}
function aboutPage(){
    window.location="about-us.html"
}
function servicesPage(){
    window.location="services.html"
}
function homePage(){
    window.location="index.html"
}