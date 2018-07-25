const moment = require('moment')

function taskCard (data) {
  return `
  <div class="card small blue-grey darken-1">
    <div class="card-content white-text">
      <span class="card-title">${data.title}</span>
      <p>${data.description}</p>
    </div>
    <div id=${data.id} class="card-action">
      <button data-list-id="${data.list_id}"class="update-button btn waves-effect waves-light">Update
      </button>
      <button data-list-id="${data.list_id}"class="complete-button btn waves-effect waves-light">Complete
      </button>
      <p class="white-text">${data.created_at === data.updated_at ? 'Created ' + moment(data.created_at).format('LLL') : 'Updated ' + moment(data.updated_at).format('LLL')}</p>
    </div>
  </div>`
}

function doneTaskCard (data) {
  return `
  <div class="card small blue-grey darken-1">
    <div class="card-content white-text">
      <span class="card-title">${data.title}</span>
      <p>${data.description}</p>
    </div>
    <div id="${data.id}" class="card-action">
      <button data-list-id="${data.list_id}"class="delete-button btn waves-effect waves-light">Remove
      </button>
      <p class="white-text">Completed ${moment(data.updated_at).format('LLL')}</p>
    </div>
  </div>`
}

function taskUpdateCard (title, description) {
  const template = `<form class="card-content white-text">
    <span class="card-title">Update Task</span>
    <div class="row">
      <div class="input-field col s12">
        <input id="update-title" type="text" class="validate" value="${title}" required>
        <label for="update-title">Title</label>
      </div>
      <div class="input-field col s6">
        <input id="update-description" type="text" class="validate" value="${description}" required>
        <label for="update-description">Description</label>
      </div>
    </div>
    <button class="task-update btn waves-effect waves-light" name="action">Update Task
    </button>
  </form>`

  return template
}

module.exports = {
  taskCard,
  doneTaskCard,
  taskUpdateCard
}
