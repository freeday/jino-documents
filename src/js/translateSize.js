module.exports = function(bytes) {
  var kilobytes = Math.floor(bytes/1024)
  if (!kilobytes) {return bytes + ' байт'}
  var megabytes = Math.floor(kilobytes/1024)
  if (megabytes <= 1) {return kilobytes + 'Кб'}
  return megabytes + "Мб"
}
