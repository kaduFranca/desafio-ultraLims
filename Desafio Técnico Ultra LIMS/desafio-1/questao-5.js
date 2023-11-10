// Escreva um algoritmo para encontrar um único número de um array onde cada
// número repete três vezes, exceto um:
// Input : array(5, 3, 4, 3, 5, 5, 3);
// Output : array
// (
// [0] => 5,
// [1] => 3,
// [2] => 4,
// [3] => 3,
// [4] => 5,
// [5] => 5,
// [6] => 3,
// );
// Single Number: 4

const arrayInitial = [5, 3, 4, 3, 5, 5, 3];


function findAloneNumber(array) {
    const countMap = new Map();
  
    for (let i of array) {
      if (countMap.has(i)) {
        countMap.set(i, countMap.get(i) + 1);
      } else {
        countMap.set(i, 1);
      }
    }
  
    for (let [i, count] of countMap) {
      if (count === 1) {
        return i;
      }
    }
  
    return null; 
  }
  
  console.log(arrayInitial)
  console.log(findAloneNumber(arrayInitial));
  