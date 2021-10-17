const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector(".nav");
const home = document.querySelector("#home");
const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
const signup = document.querySelector("#signup");
const cross = document.querySelector("#cross");
const about_hover = document.querySelector(".about_hover");

// about.addEventListener("mouseenter",()=>{
//     console.log("yes");
//     if(about_hover.style.display=="none"){
//         about_hover.style.display="block";
//     }
//     else if(about_hover.style.display=="block"){
//         console.log("no");
//         about_hover.style.display="none";}
// })

hamburger.addEventListener("click", hamburger_mobile);

function hamburger_mobile() {
    hamburger.style.display='none';
    nav.style.height="130px";
    home.style.display='block';
    about.style.display='block';
    contact.style.display='block';
    signup.style.display='block';
    cross.style.display='block';
}
cross.addEventListener("click", cross_mobile);

function cross_mobile() {
    hamburger.style.display='block';
    nav.style.height="31px";
    home.style.display='none';
    about.style.display='none';
    contact.style.display='none';
    signup.style.display='none';
    cross.style.display='none';
}