function taskCard (data) {
  return `
  <div class="card small blue-grey darken-1">
    <div class="card-content white-text">
      <span class="card-title">${data.title}</span>
      <p>${data.description}</p>
    </div>
    <div class="card-action">
    <button id="${data.id}" data-list-id="${data.list_id}"class="complete-button btn waves-effect waves-light">Complete
    </button>
    </div>
  </div>`
}

function doneTaskCard(data) {
  return `
  <div id="${data.id}" class="card small blue-grey darken-1">
    <div class="card-content white-text">
      <span class="card-title">${data.title}</span>
      <p>${data.description}</p>
    </div>
    <div class="card-action">
    <button id="${data.id}" data-list="${data.list_id}"class="complete-button btn waves-effect waves-light">Remove
    </button>
    </div>
  </div>`
}

//add event listener to "complete" button
//on click, let completed = true
//on tasks render, if completed = false, put in doing category, if completed = true, put in done category

module.exports = {
  taskCard,
  doneTaskCard
}
