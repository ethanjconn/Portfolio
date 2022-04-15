$(document).on('scroll', function(){
    if(window.matchMedia("screen and (min-width: 1200px)").matches){
        $('.hero-1').css("left", Math.max(650 - 0.35 * window.scrollY) + "%");
        $('.hero-1-outline').css("left", Math.max(650 - 0.35 * window.scrollY) + "%");
        $('.hero-2').css("left", Math.max(-450 + 0.35 * window.scrollY) + "%");
        $('.hero-2-outline').css("left", Math.max(-450 + 0.35 * window.scrollY) + "%");
    }
    else if(window.matchMedia("screen and (min-width: 960px)").matches){
        $('.hero-1').css("left", Math.max(760 - 0.35 * window.scrollY) + "%");
        $('.hero-1-outline').css("left", Math.max(760 - 0.35 * window.scrollY) + "%");
        $('.hero-2').css("left", Math.max(-580 + 0.35 * window.scrollY) + "%");
        $('.hero-2-outline').css("left", Math.max(-580 + 0.35 * window.scrollY) + "%");
    }
    else if(window.matchMedia("screen and (min-width: 768px)").matches){
        $('.hero-1').css("left", Math.max(730 - 0.35 * window.scrollY) + "%");
        $('.hero-1-outline').css("left", Math.max(730 - 0.35 * window.scrollY) + "%");
        $('.hero-2').css("left", Math.max(-560 + 0.35 * window.scrollY) + "%");
        $('.hero-2-outline').css("left", Math.max(-560 + 0.35 * window.scrollY) + "%");
    }
    else if(window.matchMedia("screen and (max-width: 768px)").matches){
        $('.hero-1').css("left", Math.max(730 - 0.35 * window.scrollY) + "%");
        $('.hero-1-outline').css("left", Math.max(730 - 0.35 * window.scrollY) + "%");
        $('.hero-2').css("left", Math.max(-560 + 0.35 * window.scrollY) + "%");
        $('.hero-2-outline').css("left", Math.max(-560 + 0.35 * window.scrollY) + "%");
    }
});


const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const body = document.querySelector('body');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', ()=>{
        //toggle nav
        nav.classList.toggle('nav-active');
        body.classList.toggle('fixed');

        //animate navLinks
        navLinks.forEach((link, index)=>{
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.5}s`;
            }
        });

        //toggle burger
        burger.classList.toggle('toggle');
    })

}

const typedTextSpan = document.querySelector(".typed-text");

const textArray = ["web developer.", "avid fantasy reader.", "gamer.", "gym lover."];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if(charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay)
    }
    else{
        //erase
        setTimeout(erase, newTextDelay)
    }
}

function erase() {
    if(charIndex > 0){
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0,charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else {
        textArrayIndex++;
        if(textArrayIndex >= textArray.length){
            textArrayIndex=0;
        }
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function(){
    setTimeout(type, newTextDelay + 250);
})


const app = () => {
    navSlide();
    type();
}

app();