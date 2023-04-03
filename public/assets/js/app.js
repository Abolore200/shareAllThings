const menuBtn = document.querySelector('.download-button .shareAllThings-menubar button')

menuBtn.addEventListener('click', () => {
    const navMenu = document.querySelector('.sub-menu-fh-ds ul')
    navMenu.classList.toggle('showNavMenu')
})