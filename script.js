
//parte 1
const nome = "alex"
const cor = "verde"

let mensagem1 = "A cor da favorita de "+ nome+ "é "+ cor
console.log(mensagem1)

let mensagem2 = `A cor favorita de ${nome} é ${cor}`
console.log(mensagem2)

//parte 2

const citacao = "vermelho"
mensagem1 = `Nome: ${nome}
cor favorita ${cor}`
console.log

// método => toUpperCase()
// propriedade => length

//parte 3
//template string

let pessoa ="alex"

console.log(`O nome ${pessoa.toUpperCase()}
possui ${pessoa.length} caracteres`)

console.log(`O nome possui a letra A:${pessoa.includes("a")}`)//a propriedade tem a função de verificar algo dentro a string

//Exercicios
//number one
let nomeDoUsuario = prompt("Digite o seu nome:")
let emailDoUsuario = prompt("Digite o seu e-mail:")

console.log(`O email ${emailDoUsuario} foi cadastrado com sucesso.Boas vindas,${nomeDoUsuario}`)
const mencao =(`O email ${emailDoUsuario} foi cadastrado com sucesso.Boas vindas,${nomeDoUsuario}`)
//number two

console.log(`${mencao}O nome possui ${nomeDoUsuario.length} caracteres`)
console.log(`O nome possui a letra @:${emailDoUsuario.includes("@")}`)

const mencao2 =mencao.replaceAll("e","u")
console.log("substituir e por u",mencao2)