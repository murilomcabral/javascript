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
      num.value = ''
      num.focus()
   } else {
      window.alert(`Número inválido ou já consta na lista. \[${num.value}\]`)
      num.value = ''
      num.focus()
   }
}

function analisar() {
   if (valores.length != 0) {

      let tot = valores.length
      let sum = 0
      let max = valores[0]
      let min = valores[0]

      for (let pos in valores) {
         if (valores[pos] > max) {
            max = valores[pos]
         } else if (valores[pos] < min) {
            min = valores[pos]
         }
      }

      for (let pos in valores) {
         sum += valores[pos]
      }

      let med = sum / tot

      res.innerHTML = ''
      res.innerHTML += `<p>No total foram ${tot} números cadastrados.</p>`
      res.innerHTML += `<p>A soma dos valores é ${sum}.</p>`
      res.innerHTML += `<p>A média dos valores é ${med.toFixed(2)}.</p>`
      res.innerHTML += `<p>O maior valor validado foi ${max}.</p>`
      res.innerHTML += `<p>O menor valor validado foi ${min}.</p>`

   } else {
      window.alert('Não há dados')
   }
}