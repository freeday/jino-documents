var loader = require('./animationLoader')

module.exports = {

  load: function(o) {
    if (o.state !== 'load') return o

    return new Promise((resolve) => {
      loader.animate(o.loaderImg)
      setTimeout(() => {
        loader.stop()
        var className = o.el.className.replace(o.state, 'wait')
        o.el.className = `${className}`
        o.elTitle.innerHTML = `${o.phrases[1]}`
        o.elLimit.innerHTML = `${o.files[0].name} (${o.size})`
        o.state = 'wait'
        resolve(o)
      }, 2000)
    })
  },

  wait: function(o) {

    if (o.state !== 'wait') return o

    return new Promise((resolve) => {
      setTimeout(() => {
        o.state = o.status[Math.round(Math.random() * (1 - 0) + 0)];
        return resolve(o)
      }, 3000)
    })
  },

  bad: function (o) {

    if (o.state !== 'bad') return o

    let className = o.el.className.replace(/wait|upload/, 'bad')
    o.el.className = `${className}`
    o.elTitle.innerHTML = o.phrases[0]
    o.elLimit.innerHTML = o.phrases[3]
    o.state = 'bad'
    o.input.style.display = 'inline-block'
    o.input.value = ''

    return o
  },

  done: function (o) {

    if (o.state !== 'done') return o

    let className = o.el.className.replace('wait', 'done')
    o.el.className = `${className}`
    o.elTitle.innerHTML = o.phrases[2]
    o.state = 'done'
    o.input.remove()
    
    return o
  }
}
