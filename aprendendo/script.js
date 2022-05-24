let cNota = document.getElementById('contaNota')
let nota = document.querySelector('input#nota')
let bNotas = []

function cadastrar() {
   for(let n = 1; n <= 4; n++) {
      cNota.textContent = `${n}`
   }
}
