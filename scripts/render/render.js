const events = require('./event-listeners')

const templates = require('../templates/lists')

function renderTaskPage () {
  const loginCheck = JSON.parse(localStorage.getItem('token'))

  if (loginCheck) {
    document.querySelector('.login-form').classList.add('hide')
    document.querySelector('.main-navbar').classList.add('hide')
    document.querySelector('.tasks-navbar').classList.remove('hide')
    document.querySelector('.tasks-container').classList.remove('hide')

    const users = require('../requests/users')
    users.getLists(loginCheck.token)
      .then(lists => {
        console.log(lists)
        const listLinks = document.querySelector('.collection')
        lists.data.lists.forEach(list => {
          listLinks.innerHTML += templates.listLinks(list)
        })
      })
  } else {
    //Some error
  }

}

module.exports = renderTaskPage
