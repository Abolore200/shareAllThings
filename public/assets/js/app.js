const menuBtn = document.querySelector('.download-button .shareAllThings-menubar button')

menuBtn.addEventListener('click', () => {
    const navMenu = document.querySelector('.sub-menu-fh-ds ul')
    navMenu.classList.toggle('showNavMenu')
    if(navMenu.classList.contains('showNavMenu')){
        document.querySelector('body').style.position = 'fixed'
    } else {
        document.querySelector('body').style.removeProperty('position')
    }
})