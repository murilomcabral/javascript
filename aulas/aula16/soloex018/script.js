let numBox = document.querySelector('#numBox')
let listBox = document.querySelector('#listBox')
let lista = []

function inBtw(n) {
   if (n >= 1 && n <= 100) {
      return true
   } else {
      return false
   }
}

function inList(n, l) {
   for (l)
}

function validar () {
   if (inBtw(numBox.value) && !inList(numBox.value, lista)) {
      lista.push(Number(numBox.value))
      numBox.value = ''
      numBox.focus()
   } else {
      window.alert('Número inválido ou já cadastrado.')
      numBox.value = ''
      numBox.focus()
   }
}

function analisar () {

}

//solo