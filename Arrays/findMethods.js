// Métodos find  findIndex
// Find devolve o primeiro valor do array que satisfaça a condição presente na função de teste (callback)
//  Por outro lado o método findIndex devolve o indice do primeiro valor do array que satisfaça a condição

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function multipleOf13(element, index, array) {
  return element % 13 == 0;
}
console.log(numbers.find(multipleOf13));
console.log(numbers.findIndex(multipleOf13)); 

