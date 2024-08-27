// Adicionando um elemento ao final do array usando indexação direta
numbers[numbers.length] = 10;

// Adicionando múltiplos elementos ao final do array usando o método push
numbers.push(11);
numbers.push(12, 13);

// Inserindo um elemento na primeira posição do array
// Nota: Esse método sobrescreve o protótipo do Array e pode ter impacto em outras partes do código
Array.prototype.insertFirstPosition = function (value) {
  for (let i = this.length; i >= 0; i--) {
    this[i] = this[i - 1];
  }
  this[0] = value;
};
numbers.insertFirstPosition(-1);

// Removendo o primeiro elemento do array e ajustando os índices
Array.prototype.reIndex = function (myArray) {
  const newArray = [];
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] !== undefined) {
      newArray.push(myArray[i]);
    }
  }
  return newArray;
};

Array.prototype.removeFirstPosition = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1];
  }
  return this.reIndex(this);
};
numbers = numbers.removeFirstPosition();
