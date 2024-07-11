
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open')
}; 

const sr = ScrollReveal ({
    distance: '40px',
    duration: 2500,
    reset: true
});





