//document.write é uma função que escreve um texto na página HTML
//document.write(`Seja bem-vindo(a), ${nome}!`); // write() escreve um texto na página HTML

// ou

//document.body.innertHTML é uma propriedade que insere um texto na página HTML
//document.body.innerHTML += `Seja bem-vindo(a), ${nome}!`; // innerHTML insere um texto na página HTML

// Resolução do exercício:
const nome = prompt('Digite seu nome completo: '); // Recebe o nome do usuário
document.body.innerHTML = `O seu nome é: ${nome} <br />`; // innerHTML insere um texto na página HTML, quebrando a linha
document.body.innerHTML += `Seu nome tem ${nome.length} Letras <br/>`;
document.body.innerHTML += `A segunda letra do seu nome é: "${nome.charAt(1)}"<br/>`; // ou nome[1]
document.body.innerHTML += `Qual o primeiro índice da letra "a" no seu nome? ${nome.indexOf('a')}<br/>`;
document.body.innerHTML += `Qual o último indice da letra "a" no seu nome? ${nome.lastIndexOf('a')} <br/>`;
document.body.innerHTML += `As últimas 3 letras do seu nome são:${nome.slice(-3)} <br/>`;
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(" ")} <br/>`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()}<br/>`; 
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()}<br/>`;