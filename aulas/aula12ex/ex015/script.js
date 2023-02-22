   function verificar() {
      var data = new Date() // data do sistema como "Wed Mar 30 2022 13:24:44 GMT-0300 (Horário Padrão de Brasília)"
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
               document.querySelector('body').style.background = '#71C7EC';
            } else if (idade < 21) {
               //jovem
               img.setAttribute('src','imagens/garoto.png')
               document.querySelector('body').style.background = '#1EBBD7';
            } else if (idade < 50) {
               //adulto
               img.setAttribute('src','imagens/homem.png')
               document.querySelector('body').style.background = '#189AD3';
            } else {
               //idoso
               img.setAttribute('src','imagens/senhor.png')
               document.querySelector('body').style.background = '#107DAC';
            }
         } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
               //criança
               img.setAttribute('src','imagens/menina.png')
               document.querySelector('body').style.background = '#E78AB3';
            } else if (idade < 21) {
               //jovem
               img.setAttribute('src','imagens/garota.png')
               document.querySelector('body').style.background = '#E65D94';
            } else if (idade < 50) {
               //adulto
               img.setAttribute('src','imagens/mulher.png')
               document.querySelector('body').style.background = '#DE3481';
            } else {
               //idoso
               img.setAttribute('src','imagens/senhora.png')
               document.querySelector('body').style.background = '#8E2354';
            }
         } else {
            window.alert('[E0x001] Selecione o \'Sexo\'')
         }
         res.style.textAlign = 'center'
         res.innerHTML = `${genero}, com ${idade} anos de idade.`
         res.appendChild(img)
      }
   }