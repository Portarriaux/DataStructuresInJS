// Acessando elementose fazendo uma interação em um array.

// Definindo os dois primeiros números da sequência.
const fibonacci = []; 
fibonacci[1] = 1; // Primeiro número da sequência.
fibonacci[2] = 1; // Segundo número da seêquencia. 

// Calculando o restante da seqência até o 20º número.
for (let i = 3; i < 20; i++) {
fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]; 
console.log(fibonacci[i]) // Exibindo númeroa atual da sequência. 
}
