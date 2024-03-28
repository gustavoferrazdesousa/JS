// Exemplos de alert, confirm e prompt

// Exemplo de alert
alert('Olá, mundo!');

// Exemplo de confirm
var confirmacao = confirm('Deseja realmente excluir este item?');
if (confirmacao) {
    alert('Item excluído com sucesso!');
} else {
    alert('Operação cancelada pelo usuário.');
}

// Exemplo de prompt
var nome = prompt('Qual é o seu nome?');
alert('Olá, ' + nome + '!');

