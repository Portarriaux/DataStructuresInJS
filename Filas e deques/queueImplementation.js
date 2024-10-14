// Classe Queue: Implementação de uma fila (FIFO - First In First Out)
class Queue {
  constructor() {
    // Total de elementos na fila
    this.count = 0; // Incrementa quando um novo elemento é adicionado.

    // Índice do primeiro elemento a ser removido
    this.lowestCount = 0; // Incrementa quando um elemento é removido.

    // Armazena os itens da fila
    this.items = {}; // Estrutura de dados para armazenar os elementos da fila.
  }

  // Adiciona um novo elemento no final da fila
  enqueue(element) {
    this.items[this.count] = element; // Armazena o elemento no índice atual de count.
    this.count++; // Incrementa o contador total de elementos.
  }

  // Remove e retorna o primeiro elemento da fila
  dequeue() {
    if (this.isEmpty()) {
      return undefined; // Retorna undefined se a fila estiver vazia.
    }
    const result = this.items[this.lowestCount]; // Armazena o elemento a ser removido.
    delete this.items[this.lowestCount]; // Remove o elemento da fila.
    this.lowestCount++; // Atualiza o índice do primeiro elemento.
    return result; // Retorna o elemento removido.
  }

  // Retorna o primeiro elemento da fila sem removê-lo
  peek() {
    if (this.isEmpty()) {
      return undefined; // Retorna undefined se a fila estiver vazia.
    }
    return this.items[this.lowestCount]; // Retorna o elemento na frente da fila.
  }

  // Verifica se a fila está vazia
  isEmpty() {
    return this.count - this.lowestCount === 0; // Retorna true se não houver elementos na fila.
  }

  // Retorna o número de elementos na fila
  size() {
    return this.count - this.lowestCount; // Calcula a diferença entre count e lowestCount.
  }

  // Limpa todos os elementos da fila
  clear() {
    this.items = {}; // Reseta a estrutura de armazenamento.
    this.count = 0; // Reseta o contador total.
    this.lowestCount = 0; // Reseta o índice do primeiro elemento.
  }

  // Criando o método toString
  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}

const queue = new Queue();
console.log(queue.isEmpty()); // exibe true

queue.enqueue("John");
queue.enqueue("Jack");
queue.enqueue("Camila");

console.log(queue.toString()); // John,Jack,Camila
console.log(queue.size()); // exibe 3
console.log(queue.isEmpty()); // exibe false
queue.dequeue(); // remove John
queue.dequeue(); // remove Jack
console.log(queue.toString()); // Camila
