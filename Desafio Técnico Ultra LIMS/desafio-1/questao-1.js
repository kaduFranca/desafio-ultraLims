// Escreva um algoritmo para encontrar os números faltantes de um array:
// Input : array(1,2,3,6,7,8);
// Output : array([3] => 4, [4] => 5);

const arrayInitial = [1,2,3,6,7,8].sort();

function FindMissingN(array) {
    const missingN = [];
  
    for (let i = 1; i < array.length; i++) {
      const diff = array[i] - array[i - 1];
      if (diff > 1) {
        for (let j = 1; j < diff; j++) {
          missingN.push(array[i - 1] + j);
        }
      }
    }
  
    return missingN;
  }
  
  const result = FindMissingN(arrayInitial);
  console.log(result);

