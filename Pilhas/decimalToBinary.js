// Função para converter um número decimal em sua representação binária usando uma pilha
function decimalToBinary(decNumber) {
  
  // Cria uma pilha para armazenar os restos das divisões por 2
  const remStack = new Stack();

  // Variável para armazenar o número decimal original
  let number = decNumber;
  
  // Variável para armazenar o resto da divisão por 2
  let rem;

  // String que armazenará o resultado final da conversão binária
  let binaryString = "";

  // Loop para realizar divisões sucessivas por 2 enquanto o número for maior que 0
  while (number > 0) {
    // Calcula o resto da divisão por 2 (0 ou 1)
    rem = Math.floor(number % 2);
    
    // Empilha o resto (0 ou 1) na pilha
    remStack.push(rem);// Função para converter um número decimal em sua representação binária usando uma pilha
    function decimalToBinary(decNumber) {
      
      // Cria uma pilha para armazenar os restos das divisões por 2
      const remStack = new Stack();
    
      // Variável para armazenar o número decimal original
      let number = decNumber;
      
      // Variável para armazenar o resto da divisão por 2
      let rem;
    
      // String que armazenará o resultado final da conversão binária
      let binaryString = "";
    
      // Loop para realizar divisões sucessivas por 2 enquanto o número for maior que 0
      while (number > 0) {
        // Calcula o resto da divisão por 2 (0 ou 1)
        rem = Math.floor(number % 2);
        
        // Empilha o resto (0 ou 1) na pilha
        remStack.push(rem);
        
        // Atualiza o número para o quociente da divisão por 2
        number = Math.floor(number / 2);
      }
    
      // Desempilha os restos e constrói a string binária na ordem correta
      while (!remStack.isEmpty()) {
        // Concatena o valor desempilhado à string binária
        binaryString += remStack.pop().toString();
      }
    
      // Retorna a string contendo o número binário correspondente
      return binaryString;
    }
    
    // Testando a função com diferentes números decimais
    console.log(decimalToBinary(233)); // Saída: 11101001
    console.log(decimalToBinary(10));  // Saída: 1010
    console.log(decimalToBinary(100)); // Saída: 1100100
    
    
    // Atualiza o número para o quociente da divisão por 2
    number = Math.floor(number / 2);
  }

  // Desempilha os restos e constrói a string binária na ordem correta
  while (!remStack.isEmpty()) {
    // Concatena o valor desempilhado à string binária
    binaryString += remStack.pop().toString();
  }

  // Retorna a string contendo o número binário correspondente
  return binaryString;
}

// Testando a função com diferentes números decimais
console.log(decimalToBinary(233)); // Saída: 11101001
console.log(decimalToBinary(10));  // Saída: 1010
console.log(decimalToBinary(100)); // Saída: 1100100
