let num = document.querySelector('input#numBox')
let lista = document.querySelector('select#listBox')
let res = document.querySelector('div#res')
let valores = []

function isNumber(n) {
   if (n >= 1 && n <= 100) {
      return true
   } else {
      return false
   }
}

function inList(n, l) {
   if (l.indexOf(Number(n)) != -1) {
      return true
   } else {
      return false
   }
}

function validar() {
   if (isNumber(num.value) && !inList(num.value, valores)) {
      valores.push(Number(num.value))
      let item = document.createElement('option')
      item.text = `Valor ${num.value} adicionado a lista.`
      lista.appendChild(item)
      res.innerHTML = ''
   } else {
      window.alert(`Número inválido ou já consta na lista. \[${num.value}\]`)
      num.value = ''
      num.focus()
   }
   //window.alert(Number(num.value))
}