module.exports = (name, el, task) => {
  return {
    name: task,
    state: 'upload',
    el: el,
    status: ['bad', 'done'],
    phrases: [task[1], 'Файл загружен', task[2], 'Размер файла не более 5Мб'],
    elTitle: el.querySelector('.item-title'),
    elLimit: el.querySelector('.item-limit'),
    loaderImg: el.querySelector(`.icon-load`),
    input: el.querySelector(`.item-input`)
  }
}
