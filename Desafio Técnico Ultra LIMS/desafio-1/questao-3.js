// Escreva um algoritmo para encontrar três números consecutivos de um array que
// somados o resultado é igual a um outro número fornecido:
// Input : (array(2, 7, 7, 1, 8, 2, 7, 8, 7), 16));
// Output : array(
// [0] => 2 + 7 + 7 = 16,
// [1] => 7 + 1 + 8 = 16
// );

const arrayInital = [2, 7, 7, 1, 8, 2, 7, 8, 7];
const valueResult = 16;

function findSum(array, value) {
    let arrayResults = []
  for (i = 0; i <= array.length - 3; i++) {
    let arrayAux = [array[i], array[i + 1], array[i + 2]];

    if (sumArray(arrayAux) == value) {
        arrayResults.push(arrayAux);
    }
  }

  if (arrayResults.length != 0) {
    return arrayResults
  }
  return `não existe combinação que o resultado seja ${value}`
}

function sumArray(array) {
  let result = 0;

  array.forEach(function (e) {
    result += e;
  });

  return result;
}

console.log(findSum(arrayInital,valueResult))