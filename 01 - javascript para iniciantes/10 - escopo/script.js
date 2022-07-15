// Por qual motivo o código abaixo retorna com erros?
{
    var cor = 'preto';
    var marca = 'Fiat';
    var portas = 4;
}
console.log(cor, marca, portas);
//Resposta: Porque tá pedindo pra mostrar a palavra reservada VAR ao invés da variável COR. 
//E const e let não podem ser acessadas fora do Bloco

// Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {
    return x + dois;
}
function dividirDois(x) {
    return x / dois;
}
somarDois(4);
dividirDois(6);
//Resposta: const dois está declarado em um escopo, coloque-o para fora que a função dividirDois
//também terá acesso. Basta também mudar o sinal de + para /, pra realizar oq a função pede


// O que fazer para total retornar 500?
var numero = 50;

for(let numero = 0; numero < 10; numero++) {
console.log(numero);
}

const total = 10 * numero;
console.log(total);

//Resposta: Trocar a palavra reservada para LET.
  