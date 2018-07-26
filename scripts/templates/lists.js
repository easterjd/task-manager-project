function newListForm () {
  return `
    <div class="row new-list-form">
      <div class="col s12 m12">
        <div class="card full hoverable center">
          <form class="card-content white-text">
            <span class="card-title">New List</span>
            <div class="row">
              <div class="input-field col s12">
                <input id="new-list-title" type="text" class="validate">
                <label for="new-list-title"></label>Title</label>
              </div>
            </div>
            <button class="new-list-submit btn waves-effect waves-light" type="submit" name="action">Create New List
            </button>
          </form>
          <div class="notice">
          <p class="notice-para">SOmething</p>
          </div>
        </div>
      </div>
    </div>
`
}


function listLinks (listItem) {
  const link = `
  <a href="#" id="${listItem.id}" class="collection-item list-link valign-wrapper">${listItem.title}<span class="right"><button class="list-delete-button waves-effect waves-light btn" data-list-id="${listItem.id}">Delete</button></span></a>
  `
  return link
}

module.exports = {
  newListForm,
  listLinks
}
