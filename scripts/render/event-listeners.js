const users = require('../requests/users')
const render = require('./render')
const lists = require('../templates/lists')
let listLinkId= ""


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
      render.renderNewListForm()
    //   document.querySelector('.new-list-form').classList.remove('hide')
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

  //all-tasks-button

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
      const email = document.querySelector('#signup-email').value
      const password = document.querySelector('#signup-password').value
      const first_name = document.querySelector('#signup-first-name').value
      const last_name = document.querySelector('#signup-last-name').value    
      users.signupUser(password, email, first_name, last_name)
        .then(response => {
            render.renderLogin()
        })  
  })
}

function newListSubmit () {
  document.querySelector('.new-list-submit').addEventListener('click', (ev) => {
      ev.preventDefault()
      const title = document.querySelector('#new-list-title').value
      const token = JSON.parse(localStorage.getItem('token'))

      users.createList(title, token)
  })
}

function newTaskSubmit () {
    document.querySelector('.task-submit').addEventListener('click', (ev) => {
        // ev.preventDefault()
        console.log('yo')
        const title = document.querySelector('#task-title').value
        const description = document.querySelector('#task-description').value
        const token = JSON.parse(localStorage.getItem('token'))
        let list_id = listLinkId
        users.createTask(title, description, list_id, token)
    })
    
}

function completeButton(){
    Array.from(document.querySelectorAll('.complete-button')).forEach(button => {
        button.addEventListener('click', function(ev) {
            ev.preventDefault()
            const listId = ev.target.dataset.listId
            const id = ev.target.id
            const token = JSON.parse(localStorage.getItem('token'))
            users.completeTask(listId, id, token)
        })
    })
} 

function deleteButton() {
    Array.from(document.querySelectorAll('.delete-button')).forEach(button => {
        button.addEventListener('click', function(ev) {
            ev.preventDefault()
            console.log('chello')
            const id = ev.target.id
            const listId = ev.target.dataset.listId
            const token = JSON.parse(localStorage.getItem('token'))
            users.deleteTask(listId, id, token)
        })
    })
}


function listLinks() {
    Array.from(document.querySelectorAll('.list-link')).forEach(link => {
        link.addEventListener('click', (ev) => {
            ev.preventDefault
            Array.from(document.querySelectorAll('.list-link')).forEach(link => {
                link.classList.remove('active')
            })
            link.classList.add('active')
            listLinkId = link.id
            console.log(listLinkId)
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
  deleteButton,
  newTaskSubmit,
  listLinks

}
