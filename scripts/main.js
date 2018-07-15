// toggle login & signup
// const validate = require('./jquery.validate.js')

document.querySelector('.signup-button').addEventListener('click', (ev) => {
    ev.preventDefault()
    document.querySelector('.login-form').classList.add('hide')
    document.querySelector('.signup-form').classList.remove('hide')
})

document.querySelector('.login-button').addEventListener('click', (ev) => {
    ev.preventDefault()
    document.querySelector('.login-form').classList.remove('hide')
    document.querySelector('.signup-form').classList.add('hide')
})

document.querySelector('.login-submit').addEventListener('click', (ev) => {
    ev.preventDefault()
    document.querySelector('.login-form').classList.add('hide')
    document.querySelector('.main-navbar').classList.add('hide')
    document.querySelector('.tasks-navbar').classList.remove('hide')
})

document.querySelector('.signup-submit').addEventListener('submit', (ev) => {
    ev.preventDefault()
})

