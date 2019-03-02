const MAX_BYTES = 5242880
const EXT = /\.(jpe?g|png|svg|gif)$/

module.exports = {
  isImage: function(file) {
    
  },
  isSizeLimit: function(file) {
    return MAX_BYTES > file.size
  }
}
