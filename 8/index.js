// 8. 배열에서 가장 큰 숫자를 찾는 함수를 만들어보세요.

function findMax(numbers) {
  // 이곳에 코드를 작성합니다.
  let Max =numbers[0];
  for(num of numbers){
    if(Max<num){
      Max = num;
    }
  }
  return Max;
}

console.log(findMax([3, 7, 2, 9, 1])); // 9가 출력되어야 함
