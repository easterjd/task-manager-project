function successMsg () {
  const successPara = document.querySelector('.notice-para')
  successPara.innerHTML = "Success"
  setTimeout(() => {
    successPara.style.opacity = 1
    setTimeout(() => {
      successPara.style.opacity = 0
    }, 2000)
  }, 500)
}

function failureMsg () {
  const errPara = document.querySelector('.notice-para')
  errPara.innerHTML = "Not Quite"
  setTimeout(() => {
    errPara.style.opacity = 1
    setTimeout(() => {
      errPara.style.opacity = 0
    }, 2000)
  }, 500)
}

module.exports = {
  successMsg,
  failureMsg
}
