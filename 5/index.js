// 5. 숫자 배열에서 짝수만 골라서 새로운 배열을 만드는 함수를 작성하세요
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getEvenNumbers(numArray) {
  // 이곳에 코드를 작성합니다.
  let evenNum=[];
  for(number of numbers){
    if(number%2===0){
      evenNum.push(number)
    }
  }
  return evenNum
}

console.log(getEvenNumbers(numbers)); // [2, 4, 6, 8, 10]이 출력되어야 함
