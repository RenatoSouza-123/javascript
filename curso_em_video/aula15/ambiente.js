let num = [5, 8, 2, 9, 3]

num.push(7) //para inserir valores na última posição

console.log(num)
console.log(num.length)
console.log(num.sort())

for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

//maneira mais simples de fazer essa repetição
for(let pos in num) {
    console.log(num[pos])
}

//buscar valores dentro de um array
num.indexOf(7)