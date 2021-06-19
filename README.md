study_note
====================

javascript 1주차~2주차
------------
### 변수의 종류  
  + number  
  + string
  + boolean
  + undefined
  + null
  + array
  + object    
  
### 변수 심화
  + 불변형과 가변형(immutable/mutable 혹은 원시형 참조형 이라고도 불림)
  + 다양한 선언 방식
  + if문 안에서의 truthy/falsy 판별
  + 논리 연산자 동작 규칙
  + 비교 연산자 동작 규칙
  
### string
  + 메소드 연습
  + 연산자 규칙
  
### object
  + 개념과 예제
  
### array
  + 개념과 예제
  + 메소드 연습
  
### range based for문 
  + in과 of의 차이점
  
### forEach함수와 map함수
  + forEach함수
  + map함수



## 변수의 종류  
+ number: **숫자**를 나타내는 자료형이며 예외적으로 숫자로 나타낼 수 없는 문자열이나 참조형 변수를 number()를 통해 형변환 시킬 경우 나오는 **NaN**이라는 값이 존재한다.  
+ string: **문자열**을 나타내는 자료형이며 다른 언어들과 다르게 수정할 수 없는 형태다. c언어의 **const char*** 자료형을 생각하면 된다.  
+ boolean: **true/false**이며 각각 number형으로 형변환시 1과 0으로 변환된다.  
+ undefined: 변수를 선언만 했을 때 들어가 있는 자료형  
+ null: 변수 선언 후 비어있다는 것을 명시적으로 표시해주기 위한 자료형  
+ object: 파이썬의 딕셔너리형과 유사하며 **key,value**가 **property, value**로 대응된다. 또한 **value**에 함수가 들어갈 수 있다는 점이 다르다.
+ array: **property**가 모두 정수로 이루어진 **object**이다.

**앞에 +를 붙여서 number형으로 형변환 시킬 수 있다.**


## 변수 심화
+ 불변형: **number, string, boolean, undefined, null** 이렇게 5종류가 있으며 메모리에 있는 값을 수정할 수 없다.  
```javascript
a = 4;
a = a + 2; 
```  
이런 연산 실행 시 메모리에 있는 원본 데이터는 변화시키지 않고 **a + 2**의 값을 다른 메모리에  
할당한 후 **a**가 그 메모리를 가리키게한 후 사용되지 않는 메모리를 자동으로 해제한다.  
+ 참조형: **object, array**가 있으며 프로퍼티에 할당된 값을 변경하면 실제 메모리의 값이 변경된다.  
```javascript
a = {'a': 4};       
a.a = 5;
```
하면 직접 저 프로퍼티가 가리키는 메모리에 있는 값이 변경됨 

## var과 let, const  
자바스크립트는 변수를 선언할 때 자료형대신 **var, let, const**라는 키워드를 통해 선언한다.  
**var**의 경우 전역변수로 활용할 때 사용되며 **hoisting**으로 선언이 **최상단**으로 올려진다.  
이 때문에 선언시점 이전에 사용하는 경우 에러메세지가 나오지 않아 디버깅에 안좋은 영향을 줘서 최근  
**let과 const**가 새로 추가가 되었다. 또 어떤 for이나 while등의 {}스코프안에 선언 및 초기화 하더라도  
바깥으로 꺼내져서 선언이 먼저 된다.(함수안에서는 지역변수로 처리된다.) 또한 여러 번 선언이 가능해서  
코드가 길어졌을 때 실수로 동일한 변수명을 사용해도 오류가 나지 않으니 문제가 많았다.  
```javascript
console.log(title)//undefined
var title = 'name'
console.log(title)//name
--------------------------------------------
var title
console.log(title)//undefined
title = 'name'
console.log(title)//name
```
위쪽 아래쪽 모두 동일한 결과를 보여준다.

let이나 const는 이런 경우 타 언어들의 지역변수나 일반변수처럼 중복선언이 불가능해 개선되었다. 
let은 c언어에서 일반 변수를 생각하면되고 const 역시 c언의 const형으로 생각하면 된다.  

## 자료형 별 while 혹은 if문 안의 조건문에서의 판별  
**False**: false, null, undefined, NaN, 0, ‘’(빈 문자열)  
**True**: 나머지(빈 Object, 빈 Array 포함)  


## 논리 연산자 동작과정  
자바스크립트는 일반적인 다른언어들과 다르게 논리연산자가 boolean값을 리턴하지않는다.  
&&의 경우 좌측값이 형변환 시 true에 해당하면 우측값(변환 이전값)을 반환하고   
좌측값이 false에 해당하면 좌측값(변환 이전값)을 반환한다.  
||의 경우 정반대로 왼쪽값이 형변환 시 true에 해당하면 좌측값(변환 이전값)을 반환하고  
좌측값이 false에 해당하면 우측값(변환 이전값)을 반환한다.  
```javascript
console.log('name' && 'javascript') // javascript(우측값)
console.log(true && true) // true(우측값)
console.log(true && false) // false(우측값)
console.log(false && true) // false(좌측값)
console.log(false && false) // false(좌측값)

console.log(true || true) //true (좌측값)
console.log(true || false) // true(좌측값)
console.log(false || true) // true(우측값)
console.log(false || false) // false(우측값)

console.log(null && undefined) // null(좌측값)
console.log(0 || true) // true(우측값)
console.log('0' && NaN) //NaN(우측값)
console.log({} || 123) // {}(좌측값)
```
이를 활용하여 어떤 명령 중 default값을 정해둘 수 있다.  
서버에서 에러메세지를 기본 500으로 지정해두는 등 예외처리를 할 때 사용하기도 한다.
```javascript
function print(value) {
  const message = value || 'string'
  console.log(message)
}
print()//value가 undefined로 false이므로 우측값 'string'출력
print('a')//value가 'a'로 true이므로 좌측값 'a'출력
```
또한 &&연산자가 ||연산자보다 우선순위가 높으므로 괄호를 잘쳐야 원하는 조건을 만들 수 있다.  

?? 연산자는 좌측값이 null 또는 undefined면 우측값을 출력하고
아니면 좌측값을 출력한다. ||와 다르게 제한된 동작을 하므로 상황에 따라 쓸 수 있다.

```javascript
const example1 = null ?? 'I'; //I
const example2 = undefined ?? 'love';//love
const example3 = 'Code' ?? 'JavaScript';//Code

console.log(example1, example2, example3); 
```

## 비교 연산자 동작 규칙  
기본적으로 값을 비교하는 경우 타 언어와 다르게 형변환이 된다.  
`==`연산자와 `!=`연산자의 경우도 마찬가지이므로 정확히 같은 자료형을 비교하고 싶다면  
`===`연산자 혹은 `!==`연산자를 이용해야한다.  
`==`혹은 `!=` 연산자 비교 규칙  
1. 기본적으로 number가 아니라면 number로 형변환을 시도한다.
2. undefined와 null끼리 비교시 true를 반환한다.
4. 숫자로 변환할 수 없는 문자열일 경우 NaN으로 바뀌어 비교를 시도한다.
5. NaN끼리 비교시 무조건 false가 반환된다.
6. array 혹은 object 비교시 같은 객체를 가리키고 있는 변수일 경우에만 true (c언어에서 포인터 비교와 비슷)
7. 문자열끼리 비교시 같은순서로 배열되어있는지 글자 수가 같은지 비교한다.

`>=, <=`등 크기 비교연산자 비교 규칙  
1. 문자열은 사전 순으로 비교한다.
2. undefined는 NaN, null은 0으로 형변환되기 때문에 undefined는 undefined이외의 값과 비교연산 시 무조건 false가 나온다.
3. array나 object역시 NaN으로 변환되므로 주의




