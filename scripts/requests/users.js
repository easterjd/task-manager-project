const renderTaskPage = require('../render/render')

function loginUser (email, pass) {
  return axios.post('http://localhost:5000/api/users/login', {email, password: pass})
    .then(token => {
      console.log(token)
      renderTaskPage(token)
    })
    .catch(err => {
      // Some Error Msg
    })
}

function getLists (token) {
  console.log('getLists', token)
  return axios.get('http://localhost:5000/api/lists', { headers: { authorization: `Bearer ${token.data.token}`}})
    .then(lists => {
      return lists
    })
    .catch(err => {
      // some error
    })
}

module.exports = {
  loginUser,
  getLists
}
