//string
let a = 'a'
console.log(a)

//줄바꿈 혹은 특수문자를 포함한 문자열을 이스케이프 문자'\'없이 표시할 땐 `  ` 이걸로 감싸면된다.(키보드 1왼쪽에 위치)
let b = `aasdjb

hbljdg`

console.log(b);
let s = 52231;

b = `asaddassd ${s}`
//이렇게 ${}로 감싸서 변수를 사용할 수도 있다.


console.log(b);
a = a + a //연결연산자
console.log(a)