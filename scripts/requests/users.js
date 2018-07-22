const render = require('../render/render')

function loginUser (email, pass) {
  return axios.post('http://localhost:5000/api/users/login', {email, password: pass})
    .then(token => {
      localStorage.setItem('token', JSON.stringify(token.data.token))
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

function completeTask (listId, id, token) {
  const body = { 'completed' : true }
  return axios.patch(`http://localhost:5000/api/lists/${listId}/tasks/${id}`, body, { headers: { authorization: `Bearer ${token}`}})
   .then(response => {
      render.renderTaskPage()
   })
}

function deleteTask (listId, id, token) {
  return axios.delete(`http://localhost:5000/api/lists/${listId}/tasks/${id}`, { headers: { authorization: `Bearer ${token}`}})
  .then(response => {
    render.renderTaskPage()
  })
}

module.exports = {
  loginUser,
  getLists,
  completeTask,
  deleteTask,
  logout,
 
}
