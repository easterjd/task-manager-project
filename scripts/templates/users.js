function login () {
  return `
    <div class="row login-form">
      <div class="col s12 m12">
        <div class="card blue-grey darken-1 center">
          <form class="card-content white-text">
            <span class="card-title">Login</span>
            <div class="row">
              <div class="input-field col s6">
                <input id="email" type="email" class="validate" value="student@galvanize.com">
                <label for="email">Email</label>
              </div>
              <div class="input-field col s6">
                <input id="password" type="password" class="validate" value="password">
                <label for="password">Password</label>
              </div>
            </div>
            <button class="login-submit btn waves-effect waves-light" type="submit" name="action">Login
            </button>
          </form>
        </div>
      </div>
    </div>`
}

function signup () {
  return `
  <div class="row signup-form hide" id="signup-form">
      <div class="col s12 m12">
        <div class="card blue-grey darken-1 center">
          <form class="card-content white-text">
            <span class="card-title">Signup</span>
            <div class="row">
              <div class="input-field col s12">
                <input id="signup-email" type="email" class="validate">
                <label for="email">Email</label>
              </div>
              <div class="input-field col s6">
                <input id="signup-password" type="password" class="validate" placeholder="choose a password">
                <label for="password">Password</label>
              </div>
              <div class="input-field col s6">
                <input id="signup-password-re-enter" type="password" class="validate" placeholder="re-enter your password">
                <label for="password">Password</label>
              </div>
            </div>
            <button class="signup-submit btn waves-effect waves-light" type="submit" name="action">Signup
            </button>
          </form>
        </div>
      </div>
    </div>`
}

module.exports = {
  login,
  signup
}