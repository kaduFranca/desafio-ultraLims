// Escreva um algoritmo para encontrar três números consecutivos de um array que
// somados o resultado é igual a zero:
// Input : array(-1,0,1,2,-1,-4);
// Output : array([0] => -1 + 0 + 1 = 0);

const arrayInital = [-1, 0, 1, 2, -1, -4];

function findSum(array) {
  for (i = 0; i <= array.length - 3; i++) {
    let arrayAux = [array[i], array[i + 1], array[i + 2]];

    if (sumArray(arrayAux) == 0) {
      return arrayAux;
    }
  }
  return 'não existe combinação que o resultado seja 0'
}

function sumArray(array) {
  let result = 0;

  array.forEach(function (e) {
    result += e;
  });

  return result;
}

console.log(findSum(arrayInital))