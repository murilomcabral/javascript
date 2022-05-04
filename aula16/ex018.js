function adicionarValor() {
   let num = document.querySelector('#numInput')
   if (num = "") {
      window.alert('Informe 1 número!')
   } else {
      let box = document.querySelector('#inputBox')
      box.append = (`O número ${num} foi adicionado.`)
   }
}

//verificar código