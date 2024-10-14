// Definição da classe Deque (Fila Dupla)
class Deque {
  constructor() {
    this.count = 0; // Contador de itens
    this.lowestCount = 0; // Posição do primeiro item
    this.items = {}; // Armazena os elementos
  }

  // Adiciona elemento na frente do deque
  addFront(element) {
    if (this.isEmpty()) { // Se estiver vazio, usa addBack
      this.addBack(element);
    } else if (this.lowestCount > 0) { // Se houver espaço no início
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else { // Se não houver espaço, move todos os itens
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.lowestCount = 0;
      this.items[0] = element; // Adiciona na primeira posição
    }
  }

  // Outros métodos (addBack, removeFront, removeBack etc.) podem ser adicionados aqui
}

// Exemplo de uso
const deque = new Deque();
console.log(deque.isEmpty()); // true

deque.addBack('John');
deque.addBack('Jack');
console.log(deque.toString()); // John,Jack

deque.addBack('Camila');
console.log(deque.toString()); // John,Jack,Camila

console.log(deque.size()); // 3
console.log(deque.isEmpty()); // false

deque.removeFront(); // Remove John
console.log(deque.toString()); // Jack,Camila

deque.removeBack(); // Remove Camila
console.log(deque.toString()); // Jack

deque.addFront('John'); // John retorna
console.log(deque.toString()); // John,Jack
