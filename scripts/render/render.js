const events = require('./event-listeners')
const { listsTemp, nav, page, tasks, users } = require('../templates')
let linkId = 0

async function renderTaskPage () {
  const events = require('./event-listeners')
  const { lists, nav, page, tasks, users} = require('../templates')
  const loginCheck = JSON.parse(localStorage.getItem('token'))

  if (loginCheck) {
    const users = require('../requests/users')
    const listCheck = await users.getLists(loginCheck)
    if (listCheck.data.lists.length === 0) {
      renderNewListForm()
      events.newListSubmit()
      return
    } else {
      const container = document.querySelector('.general')
      const navButtons = document.querySelector('#nav-mobile')
      container.innerHTML = page.taskPage()
      navButtons.innerHTML = nav.taskNav()
      events.navLinksTasks()
      events.newTaskSubmit()
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
        events.listLinks()
      })
      .then(res => {
        const listLinks = document.querySelector('.collection')
        if(linkId === 0) {
          let number = Number(listLinks.children[0].id)
          listLinkId(number)
          let activeLink = listLinks.children[0]
          activeLink.classList.add('active')
          activeLink.children[0].classList.add('hide')
          location.hash = `/lists/${number}`
        }else{
          const anotherListLinks = Array.from(document.querySelectorAll('.list-link'))
          let activeLink = anotherListLinks.find(child => parseInt(child.id) === linkId)
          activeLink.classList.add('active')
          activeLink.children[0].classList.add('hide')
          location.hash = `/lists/${linkId}`
          listTasks()
        }
      })
    }
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
  location.hash = '/login'
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
    linkId = Number(id)
    listTasks()
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
