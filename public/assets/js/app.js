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
//if newsletter email input is empty, show error message
const subscribeNewsletter = document.querySelector('.subscribe-for-newsletter')
subscribeNewsletter.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = document.querySelector('.subscribe-for-newsletter #email').value
    if(email === ''){
        html.displayNewsError('email cannot be empty')
    } else {
        window.location.href = 'index.html'
    }
})
document.querySelector('.registerEmail').addEventListener('submit', (e) => {
    e.preventDefault()
    const email = document.querySelector('.registerEmail #email').value
    if(email === ''){
        html.displaySignUpError('email cannot be empty')
    } else {
        window.location.href = 'index.html'
    }
})
class htmlui{
    displayNewsError(error) {
        const errorMsg = document.createElement('div')
        errorMsg.classList.add('errorMsg')
        errorMsg.innerHTML = `<p>${error}</p>`
        //insert the div to errorMsg
        subscribeNewsletter.insertBefore(errorMsg, document.querySelector('.subscribe-for-newsletter .input-field'))
        setTimeout(() => {
            errorMsg.remove()
        },1500)
    }
    displaySignUpError(error) {
        const errorMsg = document.createElement('div')
        errorMsg.classList.add('errorMsg')
        errorMsg.innerHTML = `<p>${error}</p>`
        //insert the div to errorMsg
        document.querySelector('.registerEmail').insertBefore(errorMsg, document.querySelector('.registerEmail .input-field'))
        setTimeout(() => {
            errorMsg.remove()
        },1500)
    }
}
const html = new htmlui()