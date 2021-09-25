const menuBtn = document.querySelector('.menu-btn');
const menuOpenPage = document.querySelector('.wrapper');
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