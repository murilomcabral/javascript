let valores = [8,1,7,4,2,9]

console.log(valores)
console.log("")

for(let pos in valores) {
   console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

let num = 7
let indice = valores.indexOf(num)

if (indice == -1) {
   console.log(`[ERRO 0X001] Valor não encontrado!`)
} else {
   console.log(`A posição do número ${num} é a de número ${indice}`)
}

// for(let pos=0; pos<valores.length; pos++) {
//    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
// }