//함수 정리

function sayHi() {
  console.log('Hi');
}//이렇게 function 키워드를 사용하여 선언할 수 있다.
//var과 마찬가지로 hoisting되므로 주의!
//이런 방식으로 선언하는 방식을 한수선언문이라고한다.
sayHi()


//hoisting을 개선하기 위해 const키워드로 변수에 대입할 수도 있다.
const say = function (word) {
  console.log(word);
}//이렇게 변수에 대입하기 위해 값으로서 선언하는 경우 함수표현식이라고 한다.
//사용하려면 변수에 괄호를 붙여서 사용한다.
//이렇게 함수표현식의 이름이 없는 경우를 익명함수라고도 한다. 파이썬의 람다와 유사

say()//기본적으로 인자가 전달되지않은 매개변수에는 undefined가 할당된다.
say(5)

const say2 = function (word = 'Hi') {//이렇게 default값을 지정할 수도 있다.
  console.log(word);
}
say2()

const say3 = function (...words) {//이렇게 여러개의 인자를 배열로 받을 수도 있다.
  console.log(words);
}
say3('Hi', 'jhc')

const say4 = (a) => console.log(a);//이런식으로 function 키워드 대신 화살표로 나타낼 수도 있다.
//함수 내부 구문이 여러줄일 경우 중괄호로 묶어 사용할 수도 있다.
//파라미터가 하나일 경우 const say4 = a => console.log(a) 이런 식으로 나타낼 수도 있다.
//또한 중괄호로 묶지 않고 구문을 사용하는 경우 return 자동으로 결과가 return된다.
//const say4 = a => a+4 //a+4리턴
say4(123213)


const fib = function (number) {
  if (number < 2) return 1
  return fib(number - 1) + fib(number - 2)
}//이렇게 재귀로 나타낼 수도 있다.

console.log(fib(4))// 0: 1    1: 1     2: 2   3: 3    4: 5 이므로 5출력

const fib2 = function a(number) {
  if (number < 2) return 1;
  return a(number - 1) + a(number - 2);
}
/*
이렇게 함수표현식에 이름이 붙어 있는경우 변수명이 아닌 함수표현식의 이름으로도 재귀호출이 가능하다.
// 함수 바깥에서는 함수표현식의 이름으로 호출할 수 없다.
// a(4)//오류 fib2(4)//5반환
//나중에 외부파일에서 함수를 참조할 때 변수로 옮기는 과정 중 원본 함수가 변형될 경우 오류가 나는 것을 방지
오류 예시*/
/*
let fib3 = fib;
fib = null;
fib3(4)// 이 때 fib3에 저장된
function (number) {
  if (number < 2) return 1
  return fib(number - 1) + fib(number - 2)
}에서 사용되는 fib가 null이 되어 fib(number - 1)에서 소괄호 연산자를 사용하면 type error가 발생돼 오류가 난다.



그러나
let fib3 = fib2;
fib2 = null
fib3(4)//이렇게 하면
function a(number) {
  if (number < 2) return 1
  return a(number - 1) + a(number - 2)
}에서 재귀호출을 a로 하고 있으므로 정상적으로 동작한다.
*/


//즉시실행함수 IIFE
let a = (function add(a, b) { return a + b })(1, 2);
console.log(a)
//이렇게 함수를 소괄호로 묶고 그다음 소괄호로 인자를 전달하는 방식을 즉시 실행함수라고한다.
//한번 실행하고 버릴 경우 주로 사용되며 이렇게 실행된 함수는 바로 메모리가 반환된다.

