// Função para verificar se a string de parênteses, colchetes e chaves está balanceada
let isValid = (s) => {
    // Criamos uma pilha para armazenar os fechamentos esperados
    let pilha = [];
  
    // Loop para percorrer cada caractere da string 's'
    for (let i = 0; i < s.length; i++) {
      // Se a string tiver apenas um caractere, já sabemos que é inválida
      if (s.length == 1) return false;
  
      // Se encontrarmos um parêntese de abertura "(", colocamos o fechamento esperado ")" na pilha
      if (s[i] === "(") {
        pilha.push(")");
      
      // Se encontrarmos uma chave de abertura "{", colocamos o fechamento esperado "}" na pilha
      } else if (s[i] === "{") {
        pilha.push("}");
      
      // Se encontrarmos um colchete de abertura "[", colocamos o fechamento esperado "]" na pilha
      } else if (s[i] === "[") {
        pilha.push("]");
      
      // Se encontramos um fechamento (")", "}", ou "]"), verificamos se ele corresponde ao último fechamento esperado
      } else {
        let expected = pilha.pop();  // Remove e armazena o último fechamento esperado da pilha
        console.log(`Fechamento esperado: ${expected}, Fechamento encontrado: ${s[i]}`);
        
        // Se o fechamento atual (s[i]) não for igual ao esperado, retornamos falso
        if (expected !== s[i]) {
          return false;
        }
      }
    }
  
    // Se a pilha estiver vazia no final, significa que todos os parênteses foram balanceados corretamente
    return !pilha.length;
  };
  
  // Teste da função com um exemplo que retorna 'false' porque a sequência está incorreta
  console.log(isValid("([)]"));  // false
  