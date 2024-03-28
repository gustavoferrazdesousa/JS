//Não podemos criar constantes com palavras reservadas
//Constantes precisam ter nomes significativos
//Não pode começar o nome de uma constante com um número
//Não podem conter espaços ou traços
//Utilizamos camelCase (primeira palavra minuscula, demais palavras com a primeira letra maiuscula)
//Case-sensitive (letras maiusculas e minusculas fazem diferença)
//Não podemos redeclarar constantes com const
//Não utilize var, utilize const

const nome = "João";

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultado);
console.log(resultadoTriplicado);
