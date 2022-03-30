   function verificar() {
      var data = new Date()
      var ano = data.getFullYear()
      var fAno = document.getElementById('txtano')
      var res = document.querySelector('div#res')
      if (fAno.value.length == 0 || Number(fAno.value) > ano) {
         window.alert('[E0x000] Verifique o ano novamente!')
      } else {
         var fsex = document.getElementsByName('radsex')
         var idade = ano - Number(fAno.value)
         var genero = ''
         var img = document.createElement('img')
         img.setAttribute('id','foto')
         if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
               //criança
               img.setAttribute('src','imagens/menino.png')
            } else if (idade < 21) {
               //jovem
               img.setAttribute('src','imagens/garoto.png')
            } else if (idade < 50) {
               //adulto
               img.setAttribute('src','imagens/homem.png')
            } else {
               //idoso
               img.setAttribute('src','imagens/senhor.png')
            }
         } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
               //criança
               img.setAttribute('src','imagens/menina.png')
            } else if (idade < 21) {
               //jovem
               img.setAttribute('src','imagens/garota.png')
            } else if (idade < 50) {
               //adulto
               img.setAttribute('src','imagens/mulher.png')
            } else {
               //idoso
               img.setAttribute('src','imagens/senhora.png')
            }
         } else {
            window.alert('[E0x001] Selecione o \'Sexo\'')
         }
         res.style.textAlign = 'center'
         res.innerHTML = `${genero}, com ${idade} anos de idade.`
         res.appendChild(img)
      }
   }