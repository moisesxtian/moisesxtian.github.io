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
function contactPage(){
    window.location="contact-us.html"
}

function buttonClick(){
getInfo();
}

function getInput(){
    var name=document.getElementById('name').value;
    var adress=document.getElementById('adress').value;
    var subject=document.getElementById('subject').value;
    var message=document.getElementById('message').value;
    var mes='Name: '+ name + '<br/> Email: '+adress+'<br/> Subject: '+ subject + '<br/> Message: '+message;
    console.log(name)
    console.log(subject)
    console.log(adress)
    console.log(message)

        Email.send({
            SecureToken :"0445ea57-f16c-46f9-ba20-72a9177cb966",
            To : 'christiansmoises231@gmail.com',
            From : "christiansmoises023@gmail.com",
            Subject : "TAILS OF MANILA INQUIRY",
            Body : mes
        }).then(
          message => alert(message)
        );
}