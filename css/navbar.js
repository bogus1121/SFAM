const showNavbar = () => {
    const navBar = document.querySelector('.main-nav');
    const logo = document.querySelector('.logo');
    const links = document.querySelector('.main-menu');

    navBar.classList.toggle('sticky', window.scrollY > 0);
    logo.classList.toggle('chgDimensions' , window.scrollY > 0);
    links.classList.toggle('chgSize' , window.scrollY > 0);
}

const mainNavbar = () => {
    window.addEventListener("scroll", showNavbar);
}

document.addEventListener('DOMContentLoaded', mainNavbar);