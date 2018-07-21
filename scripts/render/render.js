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
        const listLinks = document.querySelector('.collection')
        lists.data.lists.forEach(list => {
          listLinks.innerHTML += listsTemp.listLinks(list)
          let listTasks = list.tasks
          listTasks.forEach(task => {
            const doingTasks = document.querySelector('.doing-tasks')
            const doneTasks = document.querySelector('.done-tasks')
            if(task.completed === false) {
              doingTasks.innerHTML += tasks.taskCard(task)
            }
            if(task.completed === true) {
              console.log('hello')
              doneTasks.innerHTML += tasks.doneTaskCard(task)
            }
          })
        })
        events.completeButton()
        events.deleteButton()
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

function renderDoneTasks() {

}
function renderDeletedTasks() {

}

// function renderSignup () {
//   const navButtons = document.querySelector('#nav-mobile')
//   const container = document.querySelector('.general')
//   navButtons.innerHTML = nav.mainNav()
//   container.innerHTML = users.signup()
// }

module.exports = {
  renderTaskPage,
  renderLogin,
  renderDoneTasks,
  renderDeletedTasks
}
