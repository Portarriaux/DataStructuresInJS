// Função que simula o jogo "Hot Potato" (Batata Quente)
function hotPotato(elementsList, num) {
  // Cria uma nova fila para gerenciar os jogadores
  const queue = new Queue(); // {1}

  // Array para armazenar os jogadores eliminados em ordem
  const eliminatedList = []; // Corrigi o nome para manter a grafia padrão

  // Adiciona todos os elementos (jogadores) na fila
  for (let i = 0; i < elementsList.length; i++) {
    queue.enqueue(elementsList[i]); // {2}
  }

  // Continua o jogo até sobrar apenas um jogador na fila
  while (queue.size() > 1) {
    // Passa a batata quente num vezes
    for (let i = 0; i < num; i++) {
      // Remove o jogador da frente da fila e o coloca no final da fila
      queue.enqueue(queue.dequeue()); // {3}
    }
    // Após passar a batata quente num vezes, elimina o jogador da frente da fila
    eliminatedList.push(queue.dequeue()); // {4}
  }

  // Retorna os jogadores eliminados e o vencedor (último jogador na fila)
  return {
    eliminated: eliminatedList,
    winner: queue.dequeue(), // {5}
  };
}

// Exemplo de uso da função
const names = ["John", "Jack", "Camila", "Ingrid", "Carl"];
const result = hotPotato(names, 7);

// Exibe os jogadores eliminados
result.eliminated.forEach((name) => {
  console.log(`${name} foi eliminado do jogo Batata Quente.`);
});

// Exibe o vencedor
console.log(`O vencedor é: ${result.winner}`);
