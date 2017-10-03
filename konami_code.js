function init() {
  const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
  const body = document.body
  var i = 0
    function onKey(e) {
      console.log(e.which)
      if (e.which === code[i]){
        i++
        if (i === code.length - 1){
          console.log(alert("You did it!"))
          i = 0
        }
      }
    }
  body.addEventListener('keydown', onKey)
}
