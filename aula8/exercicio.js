/* Escreva: Luiz Otávio Miranda tem 30 anos e pesa 84kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio Miranda nasceu em 1989*/

let nome = "Luiz Otávio Miranda";
let idade = 30;
let anoDeNascimento = 2019 - idade;
let peso = 84;
let altura = 1.8;
let imc = peso / (altura * altura);

console.log(`${nome} tem ${idade} anos e pesa ${peso}kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoDeNascimento}`);
