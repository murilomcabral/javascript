function tabuada(){
   let num = document.getElementById('txtn')
   let tab = document.getElementById('selTab')
   // attrSize.setAttribute("size", "10");
   
   if (num.value.length == 0) {
      window.alert('Por favor, digite um número!')
   } else {
      let n = Number(num.value)
      let c = 1
      tab.innerHTML = ''
      let attrSize = document.querySelector('#selTab')
      attrSize.setAttribute('size','10')
      
      while (c <= 10) {
         let item = document.createElement('option')
         item.text = `${n} x ${c} = ${n*c}`
         tab.value = `tab${c}`
         tab.appendChild(item)
         c++
      }
   }
}