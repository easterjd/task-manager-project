function taskCard (data) {
  return `
  <div id="${data.id}" class="card small blue-grey darken-1">
    <div class="card-content white-text">
      <span class="card-title">${data.title}</span>
      <p>${data.description}</p>
    </div>
    <div class="card-action">
      <a href="#">This is a link</a>
      <a href="#">This is a link</a>
    </div>
  </div>`
}

module.exports = {
  taskCard
}
