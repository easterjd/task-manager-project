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
            <div class="card center hoverable new-task">
              <form class="card-content white-text">
                <span class="card-title">Create A New Task</span>
                <div class="row">
                  <div class="input-field col s12">
                    <input id="task-title" type="text" class="validate" required>
                    <label for="task-title">Title</label>
                  </div>
                  <div class="input-field col s6">
                    <input id="task-description" type="text" class="validate" required>
                    <label for="task-description">Description</label>
                  </div>
                </div>
                <button class="task-submit btn waves-effect waves-light" name="action">Create New Task
                </button>
              </form>
              <div class="notice">
              <p class="notice-para">SOmething</p>
              </div>
            </div>
          </div>
        </div>
      </div>
<!-- DOING COLUMN -->
      <div class="col s4 center-align">
        <h2>Doing</h2>
          <div class="doing-tasks"></div>
        <!-- Task Cards -->

      </div>

<!-- DONE COLUMN -->
      <div class="col s4 center-align">
        <h2>Done</h2>
          <div class="done-tasks"></div>
        <!-- Done Tasks -->

      </div>
    </div>
  </div>`
}

module.exports = {
  taskPage
}
