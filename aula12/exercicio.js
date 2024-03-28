// Objetivo: Trocar os valores de 3 variáveis de forma que a primeira receba o valor da segunda, a segunda receba o valor da terceira e a terceira receba o valor da primeira.
let varA = "A"; // recebe valor B
let varB = "B"; // recebe valor C
let varC = "C"; // recebe valor A

// Solução 1 - Usando variável temporária (mais comum)
const varATemp = varB;
const varBTemp = varC;
const varCTemp = varA;

console.log(varATemp, varBTemp, varCTemp);

// Solução 2 - Usando destructuring assignment (menos comum)
[varA, varB, varC] = [varB, varC, varA]; // [varA, varB, varC] é o array de destino e [varB, varC, varA] é o array de origem (valores que serão atribuídos às variáveis de destino)

console.log(varA, varB, varC);
