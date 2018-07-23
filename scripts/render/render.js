const events = require('./event-listeners')
const { listsTemp, nav, page, tasks, users} = require('../templates')

function renderTaskPage () {
  const events = require('./event-listeners')
  const { lists, nav, page, tasks, users} = require('../templates')

  const loginCheck = JSON.parse(localStorage.getItem('token'))

  if (loginCheck) {
    // document.querySelector('.login-form').classList.add('hide')
    // document.querySelector('.main-navbar').classList.add('hide')
    // document.querySelector('.tasks-navbar').classList.remove('hide')
    // document.querySelector('.tasks-container').classList.remove('hide')
    const container = document.querySelector('.general')
    const navButtons = document.querySelector('#nav-mobile')
    container.innerHTML = page.taskPage()
    navButtons.innerHTML = nav.taskNav()
    events.navLinksTasks()

    const users = require('../requests/users')
    users.getLists(loginCheck)
      .then(lists => {
        console.log(lists)
        const listLinks = document.querySelector('.collection')
        lists.data.lists.forEach(list => {
          listLinks.innerHTML += listsTemp.listLinks(list)
        })
      })
  } else {
    //Some error
  }
}

function renderLogin () {
  const events = require('./event-listeners')
  const { lists, nav, page, tasks, users} = require('../templates')

  const navButtons = document.querySelector('#nav-mobile')
  const container = document.querySelector('.general')
  navButtons.innerHTML = nav.mainNav()
  container.innerHTML = users.login() + users.signup()
  events.navLinksMain()
}

// function renderSignup () {
//   const navButtons = document.querySelector('#nav-mobile')
//   const container = document.querySelector('.general')
//   navButtons.innerHTML = nav.mainNav()
//   container.innerHTML = users.signup()
// }

module.exports = {
  renderTaskPage,
  renderLogin
}
