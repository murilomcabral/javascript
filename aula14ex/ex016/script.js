function contarNum() {
   let ini = document.querySelector('#ini')
   let fim = document.querySelector('#fim')
   let stp = document.querySelector('#stp')
   let res = document.querySelector('#contagem')
   
   if (ini.value.length == 0 || fim.value.length == 0 || stp.value.length == 0) {
      alert('[ERRO 0x01] Faltam dados!')
   } else {
      res.innerHTML = 'Contando:'
      let i = Number(ini.value)
      let f = Number(fim.value)
      let p = Number(stp.value)

      for(let c = i; c <= f; c += p) {
         res.innerHTML += `${c} `
      }
   }
}

// if (ini || fin == ('')) {
//    finalMsg = 'Digite valores'
// } else if (ini < fin) {
//    while (ini <= fin) {
//       ini += stp
//    }
// } else {
//    while (ini >= fin) {
//       ini -= stp
//    }
// }  