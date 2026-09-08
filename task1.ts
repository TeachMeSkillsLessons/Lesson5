// Написать функцию, которая будет высчитывать сумму чисел от нуля, до параметра, который мы в неё передаем.
console.log(sumNumbers(3));
function sumNumbers(n: number): number {
  let result: number = 0;
  for (let i = 0; i <= n; i++) {
    result += i;
  }
  return result;
}
