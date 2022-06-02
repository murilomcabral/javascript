let contaNota = document.getElementById('contaNota')
let nota = document.querySelector('input#nota')
let lista = document.querySelector('select#lista')
let bNotas = []
let nNota = 1
let notaT= document.querySelector('#notaT')
let cad = document.querySelector('#botaoCadastrar')

if (nota.length > 4) {
   cad.addEventListener(a)
   nota.value = ''
   nota.focus()
}

function btw(n) {
   if (n >= 0 && n <= 10) {
      return true
   } else {
   return false
   }
}

function lessThan(l) {
   if (l <= 6) {
      return true
   } else {
      return false
   }
}

function cadastrar() {
      if (btw(nota.value) && lessThan(bNotas.length)) {
         nNota++
         bNotas.push(nota.value)
         contaNota.textContent = `${nNota}`
         bNotas.push(nota.value)      
      } else if (!btw(nota.value)) {
         window.alert(`Valor inválido`)
      } else {
         notaT.innerHTML('<p>hehe</p>')
      }
   nota.value = ''
   nota.focus()
   }
   //corrigir código - o objetivo seria limitar a quantidade de notas cadastradas a 4 notas e mostrar o resultado após a validação da quarta nota.