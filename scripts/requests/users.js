const render = require('../render/render')

function loginUser (email, pass) {
  return axios.post('http://localhost:5000/api/users/login', { email, password: pass })
    .then(token => {
      localStorage.setItem('token', JSON.stringify(token.data.token))
      })
    .catch(err => {
      // Some Error Msg
      console.log('error: ', err)
    })
}

function signupUser ( password, email, first_name, last_name) {
  return axios.post('http://localhost:5000/api/users/signup', { password, email, first_name, last_name })
  .then(token => {
    localStorage.setItem('token', JSON.stringify(token.data.token))
  })
  .catch(err => {
    //error here
    console.log('error: ', err)
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
      console.log('error: ', err)
    })
}

function createList (title, token) {
  const body = { title }
  return axios.post(`http://localhost:5000/api/lists`, body, { headers: { authorization: `Bearer ${token}`}})
  .then(response => {
    render.renderTaskPage()
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

function createTask (title, description, token) {
  const body = { title, description }
  return axios.post(`http://localhost:5000/api/lists`, body, { headers: { authorization: `Bearer ${token}`}})
  .then(response => {
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
 
}
