const events = require('./event-listeners')

const templates = require('../templates/lists')

function renderTaskPage (token) {
  document.querySelector('.login-form').classList.add('hide')
  document.querySelector('.main-navbar').classList.add('hide')
  document.querySelector('.tasks-navbar').classList.remove('hide')
  document.querySelector('.tasks-container').classList.remove('hide')

  const users = require('../requests/users')
  users.getLists(token)
    .then(lists => {
      console.log(lists)
      const listLinks = document.querySelector('.collection')
      lists.data.lists.forEach(list => {
        listLinks.innerHTML += templates.listLinks(list)
      })
    })
}

module.exports = renderTaskPage
