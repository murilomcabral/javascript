function tabuada(){
   let num = document.getElementById('txtn')
   let tab = document.getElementById('selTab')
   let rep = 10
   // attrSize.setAttribute("size", "10");
   
   if (num.value.length == 0) {
      window.alert('Por favor, digite um número!')
   } else {
      let n = Number(num.value)
      let c = 1
      tab.innerHTML = ''
      let attrSize = document.querySelector('#selTab')
      attrSize.setAttribute('size', rep)
      
      do {
         let item = document.createElement('option')
         item.text = `${n} x ${c} = ${n*c}`
         tab.value = `tab${c}`
         // tab.value é necessário para integração com Python, mas não tem influência direta no código
         tab.appendChild(item)
         c++
      } while ( c <= rep)


      // while (c <= rep) {
      //    let item = document.createElement('option')
      //    item.text = `${n} x ${c} = ${n*c}`
      //    tab.value = `tab${c}`
      //    tab.appendChild(item)
      //    c++
      // }
   }
}