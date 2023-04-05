const menuBtn = document.querySelector('.download-button .shareAllThings-menubar button')
menuBtn.addEventListener('click', () => {
    const navMenu = document.querySelector('.sub-menu-fh-ds ul')
    navMenu.classList.toggle('showNavMenu')
    if(navMenu.classList.contains('showNavMenu')){
        document.querySelector('body').style.position = 'fixed'
        document.querySelectorAll('input').forEach(input => {input.disabled = true})
    } else {
        document.querySelector('body').style.removeProperty('position')
        document.querySelectorAll('input').forEach(input => {input.disabled = false})
    }
})
//add updated year
const year = new Date().getFullYear()
document.querySelector('.hl-pl-uf p span').innerHTML = year