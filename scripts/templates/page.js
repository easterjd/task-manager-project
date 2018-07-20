function taskPage () {
  return `
  <div class="container-fluid tasks-container">
    <div class="row">
<!-- ALL LISTS LIST -->
      <div class="col s4 center-align">
        <h2>All Lists</h2>
        <div class="collection">

          <!-- List Links -->

        </div>


<!-- NEW TASK FORM -->
        <div class="task-form" id="task-form">
          <div class="">
            <div class="card blue-grey darken-1 center">
              <form class="card-content white-text">
                <span class="card-title">Create A New Task</span>
                <div class="row">
                  <div class="input-field col s12">
                    <input id="task-title" type="text" class="validate">
                    <label for="task-title">Title</label>
                  </div>
                  <div class="input-field col s6">
                    <input id="task-description" type="text" class="validate">
                    <label for="task-description">Description</label>
                  </div>
                </div>
                <button class="task-submit btn waves-effect waves-light" type="submit" name="action">Create New Task
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
<!-- DOING COLUMN -->
      <div class="col s4 center-align doing-tasks">
        <h2>Doing</h2>

        <!-- Task Cards -->

      </div>

<!-- DONE COLUMN -->
      <div class="col s4 center-align done-tasks">
        <h2>Done</h2>

        <!-- Done Tasks -->

      </div>
    </div>
  </div>`
}

module.exports = {
  taskPage
}
