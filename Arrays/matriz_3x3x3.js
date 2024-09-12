const matrix3x3x3 = [];// Inicializa um array vazio.
for (let i = 0; i < 3; i++) {
matrix3x3x3[i] = []; // Inicializa o array na posição "i"
for (let j = 0; j < 3; j++) {
matrix3x3x3[i][j] = []; // Inicializa o array na posição "j" dentro de "i"
for (let z = 0; z < 3; z++) {
matrix3x3x3[i][j][z] = i + j + z; // Armazena a soma de "i", "j", e "z" na posição [i]
console.log(matrix3x3x3[i][j][z]); // Por fim imprime a posição de cada elemento
}
}
}