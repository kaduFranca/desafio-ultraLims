// 4. Escreva um algoritmo para encontrar um único número de um array que não se
// repita duas vezes:
// Input : array(5, 3, 4, 3, 4);
// Output : array
// (
// [0] => 5,
// [1] => 3,
// [2] => 4,
// [3] => 3,
// [4] => 4,
// );
// Single Number: 5

const arrayInitial = [5, 3, 4, 3, 4];

function findAloneNumber(array) {
    const count = {};
  
    for (let i = 0; i < array.length; i++) {
      const number = array[i];
      if (count[number]) {
        count[number]++;
      } else {
        count[number] = 1;
      }
    }
  
    for (let i = 0; i < array.length; i++) {
      const number = array[i];
      if (count[number] === 1) {
        return number;
      }
    }
    return null;
  }
  
  console.log(arrayInitial);
  console.log(encontrarNumeroUnico(array));