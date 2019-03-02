import './scss/main.scss'
import upload from './js/uploadStates'
import validateImage from './js/validateImage'
import translateSize from './js/translateSize'
import itemHelper from './js/itemHelper'


var run = function() {
  var arr = []
  var task = [
    ['photo', 'Загрузить скан страницы с фотографией', 'Страница с фотографией'],
    ['location', 'Загрузить скан страницы с пропиской', 'Страница с пропиской']
  ]
  for (var i = 0; i < task.length; i++) {
    let el = document.getElementById(task[i][0])
    let item = itemHelper(name, el, task[i])

    item.handler = function (e, o) {
      o.input.style.display = 'none'
      o.files = e.target.files
      o.size = translateSize(o.files[0].size),
      new Promise((resolve) => {
          if (validateImage.isSizeLimit(o.files[0])) {
            let className = o.el.className.replace(o.state, 'load')
            o.el.className = `${className}`
            o.state = 'load'
            resolve(o)
          } else {
            o.state = 'bad'
            resolve(o)
          }
        }).then((o) => {
          return upload.load(o)
        }).then((o) => {
          return upload.wait(o)
        }).then((o) => {
          return upload.done(o)
        }).then((o) => {
          upload.bad(o)
          o.input.addEventListener('change', function handler(e) {
            o.input.removeEventListener('change', handler)
            o.handler(e, o)
          })
        })
      }

    arr.push(item)
  }

  photoInput.addEventListener('change', function handlerPhoto (e) {
    photoInput.removeEventListener('change', handlerPhoto)
    arr[0].handler(e, arr[0])
  })
  locationInput.addEventListener('change', function handlerLocation(e) {
    locationInput.removeEventListener('change', handlerLocation)
    arr[1].handler(e, arr[1])
  });
}

document.addEventListener('DOMContentLoaded', run);
