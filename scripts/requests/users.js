const renderTaskPage = require('../render/render')

function loginUser (email, pass) {
  return axios.post('http://localhost:5000/api/users/login', {email, password: pass})
    .then(token => {
      localStorage.setItem('token', JSON.stringify(token.data.token))
      // renderTaskPage()
    })
    .catch(err => {
      // Some Error Msg
    })
}

function logout () {
  let token = localStorage.getItem('token')
  if (token) localStorage.removeItem('token')
  // else some error
}

function getLists (token) {
  return axios.get('http://localhost:5000/api/lists', { headers: { authorization: `Bearer ${token}`}})
    .then(lists => {
      return lists
    })
    .catch(err => {
      // some error
    })
}

module.exports = {
  loginUser,
  logout,
  getLists
}
