const render = require('../render/render')

function loginUser (email, pass) {
  return axios.post('https://hidden-waters-30960.herokuapp.com/api/users/login', { email, password: pass })
    .then(token => {
      localStorage.setItem('token', JSON.stringify(token.data.token))
      })
}

function signupUser ( password, email, first_name, last_name) {
  return axios.post('https://hidden-waters-30960.herokuapp.com/api/users/signup', { password, email, first_name, last_name })
  .then(token => {
    localStorage.setItem('token', JSON.stringify(token.data.token))
  })
}

function logout () {
  let token = localStorage.getItem('token')
  if (token) localStorage.removeItem('token')
}

function getLists (token) {
  return axios.get('https://hidden-waters-30960.herokuapp.com/api/lists', { headers: { authorization: `Bearer ${token}`}})
    .then(lists => {
      return lists
    })
}


function createList (title, token) {
  const body = { title }
  return axios.post(`https://hidden-waters-30960.herokuapp.com/api/lists`, body, { headers: { authorization: `Bearer ${token}`}})
  .then(response => {
    render.renderTaskPage()
  })
}

function updateTask (listId, id, body, token) {
  return axios.patch(`https://hidden-waters-30960.herokuapp.com/api/lists/${listId}/tasks/${id}`, body, { headers: { authorization: `Bearer ${token}`}})
  .then(response => {
    render.renderTaskPage()
  })
}

function completeTask (listId, id, token) {
  const body = { 'completed' : true }
  return axios.patch(`https://hidden-waters-30960.herokuapp.com/api/lists/${listId}/tasks/${id}`, body, { headers: { authorization: `Bearer ${token}`}})
   .then(response => {
      render.renderTaskPage()
   })
}

function deleteTask (listId, id, token) {
  return axios.delete(`https://hidden-waters-30960.herokuapp.com/api/lists/${listId}/tasks/${id}`, { headers: { authorization: `Bearer ${token}`}})
  .then(response => {
    render.renderTaskPage()
  })
}

function createTask (title, description, list_id, token) {
  const body = { title, description, list_id }
  return axios.post(`https://hidden-waters-30960.herokuapp.com/api/lists/${list_id}/tasks`, body, { headers: { authorization: `Bearer ${token}`}})
  .then(response => {
    render.renderTaskPage()
  })
}

function listDelete(listId, token){
  return axios.delete(`https://hidden-waters-30960.herokuapp.com/api/lists/${listId}`, { headers: { authorization: `Bearer ${token}`}})
  .then(res => {
    render.renderTaskPage()
  })
}



module.exports = {
  loginUser,
  signupUser,
  getLists,
  completeTask,
  deleteTask,
  logout,
  createTask,
  createList,
  updateTask,
  listDelete

}
