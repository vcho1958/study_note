//객체
let a = {
  brand: 'nike',
  year: 2021,
  nice: true,
  owner: null,
  b: { name: 'jhc', age: 24 },
  'favorite site': 'google'
}
/*
좌측: key or property name
우측: value or property value
요소하나: property
*/

/*
key는 반드시 문자, _(언더바), $ 셋중하나로 시작해야한다.
띄어쓰기 금지, -(하이푼)금지
규칙 예외로 짓고 싶은경우 따옴표로 묶어서 문자열임을 나타내야한다. 'jo hyunchang'이런 식
문자열과 상수 이외는 넣을 수 없다.
*/

/*
value는 어떤 값이든 들어갈 수 있다.
객체 및 배열, 함수도 가능
*/

typeof (a)//object 출력됨
//console.log(a.favorite site)//오류
console.log(a['favorite site'])//google 출력
//이렇게 규칙 예외로 지어진 이름의 경우 대괄호로 명시해야 정상 출력된다.
c = 'favorite site'
a[c] //이런식으로 변수에 넣어서 참조할 수도 있다.
a['favorite ' + 'site']//이렇게 수식을 넣을 수도 있다.
a.b.name // 'jhc'출력


//만약 값이 지정되지않은 프로퍼티를 참조하면 undefined가 반환된다.
//이런 성질을 이용해서
a.noneProperty !== undefined
//이런식으로 지정된 값이 있는지 판단할 수 있다.
//null로 비어있는 값을 나타내 상황을 구분할 수 있다.
//또는
'noneProperty' in a
//이렇게 불린값을 반환하게 할 수도 있다.
//undefined도 명시적으로 값으로 대입할 수 있으므로 in연산자를 사용하는 게 더 안정적이다.



//메소드
//객체에 할당된 함수를 메소드라고 한다.

let test = {
  name: 'jhc',
  printHello: function () {
    console.log('Hello');
  },
  print: function (word) {
    console.log(word);
  },
  printName: function () {
    console.log(test.name);//이렇게 객체 자신의 프로퍼티를 사용할 수도 있다.
  }
}
test.printHello() //이렇게 끝에 괄호를 붙여 인자를 전달하면 메소드가 실행된다.
const printHello = test.printHello //이렇게 괄호 없을 경우 값으로서 전달할 수도 있다.
test.print('s')//s출력
test['print']('s')//s출력
test['names'] = 'names'//이렇게 지정되지않은 property를 할당할 수도 있다.


delete test.name //프로퍼티를 제거한다.
//in연산자를 사용하면 false가 반환되도록 한다는 게 단순히 undefined를 대입할 때와 다르다.

for (let propertyname in a) {
  console.log(propertyname)
}

//in은 뒤에 오는 객체의 프로퍼티 네임을 좌측변수에 순차적으로 대입한다.

for (let propertyvalue in a) {
  console.log(propertyvalue)
}
//of는 뒤에 오는 객체의 value값을 순차적으로 좌측 변수에 대입한다.

