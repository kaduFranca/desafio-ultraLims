// Escreva um algoritmo que receba um numero e que apartir deste numero construa
// um array com a sequencia fibonacci e com o numero de elementos sendo o
// informado:
// Input : 6;
// Output : array (1, 1, 2, 3, 5, 8);

const maxRenge = 6;

function fibonacci(number) {
  if (number <= 0) {
    return [];
  } else if (number === 1) {
    return [1];
  } else if (number === 2) {
    return [1, 1];
  } else {
    const sequence = fibonacci(number - 1);
    const nextNumber =
      sequence[sequence.length - 1] + sequence[sequence.length - 2];
    sequence.push(nextNumber);
    return sequence;
  }
}

console.log(fibonacci(maxRenge));
