const events = require('./event-listeners')
const { listsTemp, nav, page, tasks, users } = require('../templates')
let linkId = 0

function renderTaskPage () {
  const events = require('./event-listeners')
  const { lists, nav, page, tasks, users} = require('../templates')

  const loginCheck = JSON.parse(localStorage.getItem('token'))

  if (loginCheck) {
    const container = document.querySelector('.general')
    const navButtons = document.querySelector('#nav-mobile')
    container.innerHTML = page.taskPage()
    navButtons.innerHTML = nav.taskNav()
    events.navLinksTasks()

    const users = require('../requests/users')
    users.getLists(loginCheck)
      .then(lists => {
        const listLinks = document.querySelector('.collection')
        listLinks.innerHTML = ""
        lists.data.lists.forEach(list => {
          listLinks.innerHTML += listsTemp.listLinks(list)
        })
       })
       .then(res => {
        listTasks()
        events.listLinks()
        events.newTaskSubmit()
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
  events.loginSubmit()
  events.signupSubmit()
}

function listTasks() {
  const loginCheck = JSON.parse(localStorage.getItem('token'))
  const users = require('../requests/users')
  users.getLists(loginCheck)
      .then(lists => {
        let listTasks = lists.data.lists
        listTasks.forEach(list => {
          if(list.id === linkId){
            const tasks = require('../templates')
            const doingTasks = document.querySelector('.doing-tasks')
            const doneTasks = document.querySelector('.done-tasks')
            const taskies = list.tasks
            doingTasks.innerHTML = ""
            doneTasks.innerHTML = ""
            taskies.forEach(task => {
              if(task.completed === false) {
                doingTasks.innerHTML += tasks.tasks.taskCard(task)
               }
              if(task.completed === true) {
              doneTasks.innerHTML += tasks.tasks.doneTaskCard(task)
            }
          })
        }
       })
    })
    .then(res => {
      let events = require('./event-listeners')
      events.completeButton()
      events.deleteButton()
      events.updateButton()

    })

  }


function renderNewListForm(){
  const container = document.querySelector('.general')
  container.innerHTML = listsTemp.newListForm()
}

function listLinkId(id) {
  if(!id) {
    return linkId
  } else {
    listTasks()
    linkId = Number(id)
    return linkId
  }
}

module.exports = {
  renderTaskPage,
  renderLogin,
  renderNewListForm,
  listLinkId,
  linkId,
  listTasks
}
