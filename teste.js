function toCamelCase(str){
  let reg = new RegExp (/[-_]/)
  let k = str.split(reg)
  k.forEach(e => e.toLowerCase())
  return k
}

let s = [
  'the-stealth-warrior',
  'The_Stealth_Warrior',
  'The_Stealth-Warrior'
]

s.forEach(e => console.log(toCamelCase(e)))