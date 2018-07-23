function successMsg (location) {
  let successPara
  if (location === 'login') {
    successPara = document.querySelectorAll('.notice-para')[0]
  } else if (location === 'signup') {
    successPara = document.querySelectorAll('.notice-para')[1]
  }
  successPara.innerHTML = "Success"
  setTimeout(() => {
    successPara.style.opacity = 1
    setTimeout(() => {
      successPara.style.opacity = 0
    }, 2000)
  }, 500)
}

function failureMsg (location) {
  let errPara
  if (location === 'login') {
    errPara = document.querySelectorAll('.notice-para')[0]
  } else if (location === 'signup') {
    errPara = document.querySelectorAll('.notice-para')[1]
  }
  errPara.textContent = "Not Quite"
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
