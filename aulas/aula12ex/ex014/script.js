function carregar() {
   var msg1 = window.document.getElementById('msg01')
   var msg2 = window.document.getElementById('msg02')
   var img = window.document.getElementById('imagem')
   var data = new Date()
   var hora = data.getHours()

   // var hora = 9

   msg1.innerHTML = `Agora são ${hora} horas.`
   if (hora >= 6 && hora < 12) {
      //bom dia
      document.body.style.background = '#EFDCA2'
      img.src = 'imagens/manha.png'
      msg2.innerText = 'Bom dia!'
   } else if (hora >= 12 && hora < 18) {
      //boa tarde
      document.body.style.background = '#F2945A'
      img.src = 'imagens/tarde.png'
      msg2.innerText = 'Boa tarde!'
   } else {
      //boa noite
      document.body.style.background = '#465665'
      img.src = 'imagens/noite.png'
      msg2.innerText = 'Boa noite!'
   }
}