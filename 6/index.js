// 6. 이름이 5글자 이상인지 확인하는 함수를 만들어보세요.
function isLongName(name) {
  // 이곳에 코드를 작성합니다.
    if(name.length>=5){
      return true
    } else {
      return false
    }
}

console.log(isLongName("김철수")); // false
console.log(isLongName("김철수바보")); // true

//다른 풀이
function isLongName(name) {
  // 이곳에 코드를 작성합니다.
    return Boolean(name.length>=5)
}

console.log(isLongName("김철수")); // false
console.log(isLongName("김철수바보")); // true