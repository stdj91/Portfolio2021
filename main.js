const menuBtn = document.querySelector('.menu-btn');
const menuOpenPage = document.querySelector('.wrapper');
const goToAbout = document.getElementById('about-section');
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


