function contarNum() {
   let ini = document.querySelector('#ini')
   let fim = document.querySelector('#fim')
   let stp = document.querySelector('#stp')
   let res = document.querySelector('#contagem')
   
   if (ini.value.length == 0 || fim.value.length == 0 || stp.value.length == 0) {
      alert('[ERRO 0x01] Faltam dados!')
   } else {
      res.innerHTML = 'Contando: <br>'
      let i = Number(ini.value)
      let f = Number(fim.value)
      let p = Number(stp.value)
      //caso o passo seja igual a zero
      if (p <= 0) {
         window.alert ('Passo inválido! Considerando PASSO 1')
         p = 1
      }
      if (i < f) {
         //contagem crescente
         for(let c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449} `
         }
      } else {
         //contagem decrescente
         for(let c = i; c >= f; c -= p) {
            res.innerHTML += `${c} \u{1F449} `
         }
      }
      //fim da contagem
      res.innerHTML += `\u{1F3C1}`
   }
}