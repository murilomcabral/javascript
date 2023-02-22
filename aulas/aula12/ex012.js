var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()
console.log(`${hora}:${min}h`)
if (hora < 12) {
   console.log('Bom dia!')
   }  else if (hora <= 18) {
      console.log('Boa tarde!')
   } else {
      console.log('Boa noite!')
   }
console.log(`${agora}`)