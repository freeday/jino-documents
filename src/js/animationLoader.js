module.exports = {
  x: 0,
  idx: 0,
  width: 32,
  timer: false,
  total: 18,

  stop: function() {
    clearTimeout(this.timer);
    this.timer = false;
  },

  animate: function (img) {
    this.x += this.width;
    this.idx += 1;

    if (this.idx >= this.total) {
      this.x = 0;
      this.idx = 0;
    }

    if(img)
      img.style.backgroundPosition = `${-this.x}px 0`;

    this.timer = setTimeout(() => {
        this.animate(img)
    }, 50);
  }
}
