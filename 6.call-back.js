//함수를 인자로 받아서 사용하는 패턴을 콜백 패턴이라고 한다.

const fail = function () {
  console.log('fail');
}

const success = function () {
  console.log('success');
}


function addquiz(number1, number2, answer, ok, no) {
  if (number1 + number2 === answer) ok();
  else no()
}


addquiz(2, 3, 5, success, fail);//success출력
addquiz(2, 4, 5, success, fail);//fail출력
//이런식으로 함수를 짜게 되면 부속을 좀 더 모듈화 시킬 수 있어서
//어떤 상황에서 동작할 부분만 인자로 전달하면 되므로 필터링이 필요한경우 사용된다.
//7번파일에서 설명할 forEach, map, filter 등이 이 패턴으로 제작된 함수이다.

