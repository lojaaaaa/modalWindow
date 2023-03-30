const openPopUp = document.querySelector('#open-popup')
const closePopUp = document.querySelector('#close-popup')
const popUp = document.querySelector('#popup')

openPopUp.addEventListener('click', e =>{
    e.preventDefault()
    popUp.classList.add('active')
})

closePopUp.addEventListener('click', e =>{
    e.preventDefault()
    popUp.classList.remove('active')
})