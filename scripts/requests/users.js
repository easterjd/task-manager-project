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

function updateTask(listId, id, token) {
  const body = { 'completed' : true }
  return axios.patch(`http://localhost:5000/api/lists/${listId}/tasks/${id}`, body, { headers: { authorization: `Bearer ${token}`}})
   .then(response => {
      // console.log("this response" + response)
      renderTaskPage.renderTaskPage()
   })
}

// , body: { id, title, description, completed: true, list_id : listId }
// listId, id, title, description,

function deleteTask() {

}

// function getTasks(token) {
//   return axios.get('http://localhost:5000/api/lists/:listId/tasks')
// }

module.exports = {
  loginUser,
  updateTask,
  deleteTask
  logout,
  getLists
}
