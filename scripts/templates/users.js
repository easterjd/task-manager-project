function login () {
  return `
    <div class="row login-form">
      <div class="col s12 m12">
        <div class="card full hoverable center">
          <form class="card-content white-text">
            <span class="card-title">Login</span>
            <div class="row">
              <div class="input-field col s6">
                <input id="email" type="email" class="validate" required>
                <label for="email">Email</label>
              </div>
              <div class="input-field col s6">
                <input id="password" type="password" class="validate" required>
                <label for="password">Password</label>
              </div>
            </div>
            <button class="login-submit btn waves-effect waves-light" type="submit" name="action">Login
            </button>
          </form>
        </div>
        <div class="notice">
        <p class="notice-para"></p>
        </div>
      </div>
    </div>`
}

function signup () {
  return `
  <div class="row signup-form hide" id="signup-form">
      <div class="col s12 m12">
        <div class="card full hoverable center">
          <form class="card-content white-text">
            <span class="card-title">Signup</span>
            <div class="row">
              <div class="input-field col s6">
                <input id="signup-first-name" type="text" class="validate" placeholder="jane" required>
                <label for="signup-first-name">First Name</label>
              </div>
              <div class="input-field col s6">
                <input id="signup-last-name" type="text" class="validate" placeholder="doe" required>
              <label for="signup-last-name">Last Name</label>
            </div>
              <div class="input-field col s12">
                <input id="signup-email" type="email" class="validate" placeholder="janedoe@yahoo.com" required>
                <label for="email">Email</label>
              </div>
              <div class="input-field col s6">
                <input id="signup-password" type="password" class="validate" placeholder="choose a password" required>
                <label for="password">Password</label>
              </div>
              <div class="input-field col s6">
                <input id="signup-password-re-enter" type="password" class="validate" placeholder="re-enter your password" required>
                <label for="signup-password-re-enter">Password</label>
              </div>
            </div>
            <button class="signup-submit btn waves-effect waves-light" type="submit" name="action">Signup
            </button>
          </form>
        </div>
        <div class="notice">
        <p class="notice-para">SOmething</p>
        </div>
      </div>
    </div>`
}

module.exports = {
  login,
  signup
}
