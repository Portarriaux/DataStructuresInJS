function baseConverter(decNumber, base) {
  // Cria uma pilha para armazenar os restos das divisões
  const remStack = new Stack();

  // Digitos possíveis para conversão, indo de 0 a Z (para bases até 36)
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // {6}

  // Variável auxiliar para manipular o número decimal
  let number = decNumber;

  // Variável para armazenar o resto da divisão
  let rem;

  // Variável para construir a string final que será retornada
  let baseString = '';

  // Verifica se a base está entre os valores permitidos (2 a 36)
  if (!(base >= 2 && base <= 36)) {
    return '';  // Retorna uma string vazia se a base for inválida
  }

  // Loop para calcular os restos e empilhá-los
  while (number > 0) {
    rem = Math.floor(number % base);  // Calcula o resto da divisão
    remStack.push(rem);  // Empilha o resto
    number = Math.floor(number / base);  // Atualiza o número para continuar a divisão
  }

  // Desempilha os restos para formar o número convertido
  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()]; // Concatena o dígito correspondente ao resto
  }

  // Retorna a string final contendo o número convertido na base desejada
  return baseString;
}

// Exemplos de uso:
console.log(baseConverter(100345, 2));  // Saída: 11000011111111001 (base 2 - binário)
console.log(baseConverter(100345, 8));  // Saída: 303771 (base 8 - octal)
console.log(baseConverter(100345, 16)); // Saída: 187F9 (base 16 - hexadecimal)
console.log(baseConverter(100345, 35)); // Saída: 2BW0 (base 35)
