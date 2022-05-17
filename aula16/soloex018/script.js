let num = document.querySelector('input#numBox')
let lista = document.querySelector('select#listBox')
let res = document.querySelector('div#res')
let valores = []


function validar() {
   if (num.value < 1 || num.value > 100) {
      window.alert(`Por favor, digite um número válido! Número \"${num.value}\" inválido.`)
      num.focus()
   } else {
      let item = document.createElement('option')
      item.text = `Número ${num.value} adicionado a lista.`
      lista.appendChild(item)
   }
   //window.alert(Number(num.value))
}