/*================== animation preload ===================*/

const preload = document.getElementById('preloader');

window.addEventListener("load", function(){
    this.setTimeout(function(){
        preload.classList.add('preloader-disappear');
        animationStart();
        setTimeout(function(){
            preload.style.display = "none";
        },700)
    }, 1700)
})
const firstMoveTop = document.getElementById('header-move1');
const secondMoveTop = document.getElementById('header-move2');
const thirdMoveTop = document.getElementById('header-move3');
const fourthMoveTop = document.getElementById('header-move4')




const animationStart = () => {
    firstMoveTop.style.transform = 'translateY(0)';
    secondMoveTop.style.transform = 'translateY(0)';
    thirdMoveTop.style.transform = 'translateY(0)';
    fourthMoveTop.style.transform = 'translateY(0)';
}


const menuBtn = document.querySelector('.menu-btn');
const menuOpenPage = document.querySelector('.wrapper');
const goToAbout = document.getElementById('about-section');
const goToProjects = document.getElementById('projects-section');
const goToContact = document.getElementById('contact-section');

let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpenPage.classList.add('active')
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpenPage.classList.remove('active');
        menuOpen = false;
    }
})
goToAbout.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpenPage.classList.add('active')
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpenPage.classList.remove('active');
        menuOpen = false;
    }
})
goToProjects.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpenPage.classList.add('active')
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpenPage.classList.remove('active');
        menuOpen = false;
    }
})
goToContact.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpenPage.classList.add('active')
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpenPage.classList.remove('active');
        menuOpen = false;
    }
})

/* ================ Experience Animation ============================*/

const firstCompany = document.getElementById('first-company');
const secondCompany = document.getElementById('second-company');
const thirdCompany = document.getElementById('third-company');
const descFirstJ = document.getElementById('one');
const descSecondJ = document.getElementById('two');
const descThirdJ = document.getElementById('three')
let firComp = true;
let secComp = false;
let thiComp = false;

secondCompany.addEventListener('click', () => {
    if(!secComp && firComp === true && thiComp === false) {
        firstCompany.classList.remove('job-active');
        secondCompany.classList.add('job-active');
        descFirstJ.classList.add('show-experience');
        descSecondJ.classList.remove('show-experience');
        secComp = true;
        firComp = false;
        thiComp = false;
    } else if (!secComp && firComp === false && thiComp === true) {
        thirdCompany.classList.remove('job-active');
        secondCompany.classList.add('job-active');
        descThirdJ.classList.add('show-experience');
        descSecondJ.classList.remove('show-experience');
        secComp = true;
        firComp = false;
        thiComp = false;
    }
})

thirdCompany.addEventListener('click', () => {
    if(!thiComp && firComp === true && secComp === false) {
        firstCompany.classList.remove('job-active');
        thirdCompany.classList.add('job-active');
        descFirstJ.classList.add('show-experience');
        descThirdJ.classList.remove('show-experience');
        secComp = false;
        firComp = false;
        thiComp = true;
    } else if (!thiComp && firComp === false && secComp === true) {
        secondCompany.classList.remove('job-active');
        thirdCompany.classList.add('job-active');
        descSecondJ.classList.add('show-experience');
        descThirdJ.classList.remove('show-experience');
        secComp = false;
        firComp = false;
        thiComp = true;
    }
})

firstCompany.addEventListener('click', () => {
    if(!firComp && secComp === true && thiComp === false) {
        secondCompany.classList.remove('job-active');
        firstCompany.classList.add('job-active');
        descSecondJ.classList.add('show-experience');
        descFirstJ.classList.remove('show-experience');
        secComp = false;
        firComp = true;
        thiComp = false;
    } else if (!firComp && thiComp === true && secComp === false) {
        thirdCompany.classList.remove('job-active');
        firstCompany.classList.add('job-active');
        descThirdJ.classList.add('show-experience');
        descFirstJ.classList.remove('show-experience');
        secComp = false;
        firComp = true;
        thiComp = false;
    }
})
