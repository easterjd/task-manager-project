function newListForm () {
  return `
    <div class="row new-list-form">
      <div class="col s6 m6">
        <div class="card blue-grey darken-1 center">
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

        </div>
      </div>
    </div>
`
}


function listLinks (listItem) {
  const link = `
  <a href="#!" id="${listItem.id}" class="collection-item list-link">${listItem.title}<button class="list-delete-button waves-effect waves-light btn" data-list-id="${listItem.id}">Delete</button></a>
  `
  return link
}

module.exports = {
  newListForm,
  listLinks
}
