// Definição da classe Stack para implementar uma pilha
class Stack {
  constructor() {
    // Inicializa a contagem de elementos na pilha
    this.count = 0;
    // Inicializa um objeto para armazenar os itens da pilha
    this.items = {};
  }

  // Método para adicionar um elemento no topo da pilha
  push(element) {
    this.items[this.count] = element; // Armazena o elemento na posição correspondente ao count
    this.count++; // Incrementa o contador de elementos
  }

  // Método para retornar o número de elementos na pilha
  size() {
    return this.count; // Retorna a contagem atual
  }

  // Método para verificar se a pilha está vazia
  isEmpty() {
    return this.count === 0; // Retorna true se a contagem for 0, caso contrário, false
  }

  // Método para remover e retornar o elemento do topo da pilha
  pop() {
    if (this.isEmpty()) {
      return undefined; // Retorna undefined se a pilha estiver vazia
    }
    this.count--; // Decrementa o contador para "mover o topo" para o próximo item
    const result = this.items[this.count]; // Armazena o valor do elemento que será removido
    delete this.items[this.count]; // Remove o item do objeto
    return result; // Retorna o elemento removido
  }

  // Método para retornar o elemento do topo da pilha sem removê-lo
  peek() {
    if (this.isEmpty()) {
      return undefined; // Retorna undefined se a pilha estiver vazia
    }
    return this.items[this.count - 1]; // Retorna o elemento no topo da pilha
  }

  // Método para limpar todos os elementos da pilha
  clear() {
    this.items = {}; // Reinicializa o objeto de itens
    this.count = 0; // Reinicializa a contagem
  }

  // Método para retornar uma representação em string dos itens na pilha
  toString() {
    if (this.isEmpty()) {
      return ""; // Retorna uma string vazia se a pilha estiver vazia
    }
    let objString = `${this.items[0]}`; // Inicia a string com o primeiro item

    // Loop para concatenar os itens restantes em uma string
    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`; // Adiciona os itens subsequentes
    }
    return objString; // Retorna a string completa
  }
}

// Exemplo de uso da classe Stack
const stack = new Stack(); // Cria uma nova instância de Stack

stack.push(10); // Adiciona o elemento 10
stack.push(20); // Adiciona o elemento 20
stack.push(30); // Adiciona o elemento 30

const anotherRemovedElement = stack.pop(); // Remove o elemento do topo (30)
console.log(anotherRemovedElement); // Exibe o elemento removido (30)

console.log(Object.getOwnPropertyNames(stack)); // Exibe as propriedades do objeto stack
console.log(Object.keys(stack)); // Exibe as chaves do objeto stack
console.log(stack.items); // Exibe os itens atuais na pilha
console.log(stack.toString()); // Exibe a representação em string dos itens na pilha


// ? TESTE