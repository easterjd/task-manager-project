function mainNav () {
  return `
    <div class="main-navbar">
      <li><a href="#" class="waves-effect waves-light btn login-button">Login</a></li>
      <li><a href="#" class="waves-effect waves-light btn signup-button">Sign-up</a></li>
    </div>
`
}

function taskNav () {
  return `
    <div class="tasks-navbar">
      <li><a href="#" class="waves-effect waves-light btn all-tasks-button">All Tasks</a></li>
      <li><a href="#" class="waves-effect waves-light btn new-list-button">New List</a></li>
      <li><a href="#" class="waves-effect waves-light btn logout-button">Logout</a></li>
    </div>
    `
}

module.exports = {
  mainNav,
  taskNav
}
