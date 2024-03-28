// Strings são indexadas, ou seja, cada caractere de uma string tem um índice associado a ele. O índice do primeiro caractere é 0, o do segundo é 1 e assim por diante.
// Uma alternativa de indexação

/*

    let umaString = "Um texto";
    console.log(umaString[4]);
    console.log(umaString[8]); 

    ou 

*/

let umaString = "Um texto";
console.log(umaString.charAt(6)); // Retorna o caractere no índice especificado

// Concatenando strings
console.log(umaString.concat(`um lindo dia`)); // Concatena duas ou mais strings
console.log(umaString + `um lindo dia`); // Concatena duas ou mais strings
console.log(`${umaString} um lindo dia`); // Concatena duas ou mais strings

// Retorna o índice da primeira ocorrência do valor especificado
console.log(umaString.indexOf("texto")); // Retorna 3
console.log(umaString.indexOf("o", 3)); // Retorna 4
console.log(umaString.lastIndexOf("m", 3)); // Retorna 1

// Retorna expressão regular que corresponde ao texto especificado
console.log(umaString.match(/[a-z]/g)); // Retorna todas as letras minúsculas
console.log(umaString.search(/[a-z]/g)); // Retorna a posição da primeira letra minúscula
console.log(umaString.replace("Um", "Outro")); // Substitui a primeira ocorrência

// Retorna o tamanho da string
console.log(umaString.length); // Retorna 8

// Retorna a string entre os índices especificados
console.log(umaString.slice(3, 7)); // Retorna a string entre os índices 3 e 7
console.log(umaString.slice(-5, -1)); // Retorna a string entre os índices -5 e -1
console.log(umaString.substring(umaString.length - 5, umaString.length - 1)); // Retorna a string entre os índices 3 e 7

// Divide a string em um array de substrings
console.log(umaString.split(" ")); // Divide a string em um array de substrings
console.log(umaString.split(" ",1)); // Divide a string em um array de substrings

//Retorna tudo em maiúsculo ou minúsculo
console.log(umaString.toUpperCase()); // Retorna tudo em maiúsculo
console.log(umaString.toLowerCase()); // Retorna tudo em minúsculo