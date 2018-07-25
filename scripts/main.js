const events = require('./render/event-listeners')
const render = require('./render/render')
const anime = require('animejs')

render.renderLogin()

var functionBasedDelay = anime({
  targets: '#alternate h3',
  translateX: 500,
  direction: 'reverse',
  opacity: 0,
  duration: function(el, i, l) {
    return 2000 + (i * 1000);
  }
  });
