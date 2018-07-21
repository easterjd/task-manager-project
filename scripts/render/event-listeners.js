const users = require('../requests/users')
const render = require('./render')

function navLinksMain () {
  document.querySelector('.signup-button').addEventListener('click', (ev) => {
      ev.preventDefault()
      document.querySelector('.login-form').classList.add('hide')
      document.querySelector('.signup-form').classList.remove('hide')
      signupSubmit()
  })

  document.querySelector('.login-button').addEventListener('click', (ev) => {
      ev.preventDefault()
      document.querySelector('.login-form').classList.remove('hide')
      document.querySelector('.signup-form').classList.add('hide')
      loginSubmit()
  })
}

function navLinksTasks () {
  document.querySelector('.new-list-button').addEventListener('click', (ev) => {
      ev.preventDefault()
      document.querySelector('.tasks-container').classList.add('hide')
      document.querySelector('.new-list-form').classList.remove('hide')
      newListSubmit()
  })

  document.querySelector('.logout-button').addEventListener('click', (ev) => {
      ev.preventDefault()
      // document.querySelector('.login-form').classList.remove('hide')
      // document.querySelector('.main-navbar').classList.remove('hide')
      // document.querySelector('.tasks-navbar').classList.add('hide')
      // document.querySelector('.tasks-container').classList.add('hide')
      users.logout()
      render.renderLogin()
  })
}

function loginSubmit () {
  document.querySelector('.login-submit').addEventListener('click', (ev) => {
      ev.preventDefault()
      const email = document.querySelector('#email').value
      const pass = document.querySelector('#password').value
      users.loginUser(email, pass)
        .then(response => {
          render.renderTaskPage()
        })

  })
}

function signupSubmit () {
  document.querySelector('.signup-submit').addEventListener('click', (ev) => {
      ev.preventDefault()
      document.querySelector('.signup-form').classList.add('hide')
      document.querySelector('.login-form').classList.remove('hide')
  })
}

function newListSubmit () {
  document.querySelector('.new-list-submit').addEventListener('click', (ev) => {
      ev.preventDefault()
      document.querySelector('.new-list-form').classList.add('hide')
      document.querySelector('.tasks-container').classList.remove('hide')
  })
}

function completeButton(){
    Array.from(document.querySelectorAll('.complete-button')).forEach(button => {
        button.addEventListener('click', function(ev) {
            ev.preventDefault()
            const listId = ev.target.dataset.listId
            const id = ev.target.id
            const title = ev.target.title
            const description = ev.target.description
            const token = JSON.parse(localStorage.getItem('token'))
            users.updateTask(listId, id, token)
            render.renderTaskPage()
        })
    })
} 


function deleteButton() {
    Array.from(document.querySelectorAll('.delete-button')).forEach(button => {
        button.addEventListener('click', function(ev) {
            ev.preventDefault()
            console.log('chello')
            const id = document
            users.deleteTask()
        })
    })
}

module.exports = {
  navLinksMain,
  navLinksTasks,
  loginSubmit,
  signupSubmit,
  newListSubmit,
  completeButton,
  deleteButton
}
