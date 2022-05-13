let c = 0 //determina o objeto no array
let lista = []

function addValor() {
   let num = Number(document.getElementById('numInput').value)
   let box = document.getElementById('inputBox')
   box.innerHTML = ""
   if (num < 1 || num > 100) {
      window.alert('Por favor, digite um número válido!')
   } else {
      lista.push(num)
      let item = document.createElement('option')
      item.text = (`O valor ${num} foi adicionado.`)
      box.appendChild(item)
      c++ //adiciona 1 ao valor

      if (box.hasAttribute('size') < c) {
         box.setAttribute('size', c)
      }
   }
   
}

function analise() {
   if (box = "") {
      window.alert('Não há dados para serem analisados.')
   } else {
      window.alert(lista)
   }
}
//array e append em section