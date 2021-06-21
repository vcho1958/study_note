//배열에서 콜백함수로 전달되는 인자는 매개변수 순서대로 value, index, 배열자기자신이다.
//물론 전달하지 않을 수도 있다.

//forEach
arr = ['a', 'b', 'c'];
arr.forEach((element, index, array) => {
  console.log(`${index} ${element}`)
  console.log(arr)
});
//콜백패턴인 함수이므로 함수를 인자로 전달한다.
//배열의 요소마다 한번씩 해당 함수를 실행한다.
//콜백으로 전달되는 함수의 첫번째 인자는 value이고 두번째 인자는 index이다.
//세번째인자는 현재 함수가 동작중인 배열이 전달된다.
//만약 변수로 지정된 배열의 경우에는 변수명으로 호출하는 게 편할 수 있지만
//다른 배열을 리턴하는 메소드 이후에 연쇄해서 사용하는 경우 편할 때도 있다.
//arr.sort().forEach()이런 식

//map
arr = ['a', 'b', 'c'];
arr.map((element, index, array) => {
  console.log(`${index} ${element}`)
  console.log(arr)
});
//요소마다 한번씩 콜백함수를 실행한다는 기본 동작은 forEach와 같으나 

const arr2 = arr.map((element, index, array) => {
  return `${element} ${index}`
});
console.log(arr2)

//map은 각 요소에 콜백함수를 실행한 리턴값들로 이루어진 배열을 반환한다.
//이를 이용하여
let gradenum = [2020039080, 2020039081, 2020039082]
let name = ['조현창', '조수아', '조경진']
let namelist = name.map((e, i) => `${gradenum[i]} ${e}`);
console.log(namelist)

//이런식으로 사용할 수도 있다. 데이터 베이스에서 가져온 요소들을 상황에 맞게 사용할 때 주로 사용된다.

//forEach와 map모두 최대 반복횟수는 호출당시 배열의 length이다.
//splice혹은 콜백함수 내부에서 값이 할당되지않은 인덱스에 값이 들어가서 length가 변화하더라도
//횟수는 유지된다는 의미


//filter
let a = [
  { name: '조현창', gender: '남', age: 25 },
  { name: '조수아', gender: '여', age: 30 },
  { name: '조경진', gender: '여', age: 34 }
]
let female = a.filter(a => a.gender === '여')
console.log(female)
//filter는 콜백함수에 배열의 요소를 순차적으로 집어넣고 리턴값이 truthy인 요소들로 이루어진 배열을 리턴한다.
//해당되는 게 없을경우 빈 배열을 리턴하므로 조건문에 사용시 truthy가 나올 수 있으므로 주의


//find
let femaleOne = a.find(a => a.gender === '여')
console.log(femaleOne)
//filter와 동작은 같지만 최초로 truthy가 리턴되는 값 하나만 리턴하고 종료한다.
//못 찾을 경우 undefined가 리턴된다.

//some, every
console.log(`some: ${a.some(a => a.age > 28)}`)
console.log(`every: ${a.every(a => a.age > 28)}`)
//some은 배열의 요소 한 개 이상이 콜백함수를 거쳤을 때 truthy를 반환하는지
//every는 배열의 모든 요소가 콜백함수를 거쳤을 때 truthy를 반환하는지
//판단하여 불린값을 리턴한다


//만약 함수실행배열이 빈배열일 경우 
//every는 true
//some은 false를 리턴하므로 주의


//reduce 특이하게 콜백에 전달되는 인자가 누산기, value, index, 배열자기자신이다
//그리고 지금까지 배운 함수들과 다르게 콜백함수 이외에 인자를 하나 더 받는데
//이 인자는 누산기의 초기값이다.

let num = [2, 4, 6]
console.log(num.reduce((acc, v, i, arr) => acc + v, 0));
//이런 식으로 구성하면 acc는 초기 0이고 배열의 요소마다 한번씩 더해지므로
//최종적으로 2+4+6인 12가 리턴되는 것
//파이썬의 accumulate함수와 유사하다.
//반복이 끝날 때 까지 리턴값이 acc에 전달되어 마지막에 리턴되는 값을 반환한다.

//두번 째 인자(acc초기값)을 생략할 경우 배열의 첫번째 인자가 acc로 들어가고
//콜백함수는 두번째 인자부터 실행된다. 그러므로 반복횟수가 중요한 경우 주의 해야함

//sort 특이하게 인자로 콜백을 전달하지 않을 경우 요소가 문자열일 경우에만
//유니코드 순으로 정렬한다.(사전순)
let nums = [3, 6, 4, 5]//이런 배열을 정렬할 경우
nums.sort((a, b) => a - b);
console.log(nums)
//이렇게 콜백함수를 지정해 주어야 하는데
//reduce함수에 두번째 인자를 지정하지 않았을 때 처럼 a에는 0번 인덱스
//b에는 1번 인덱스 부터 들어가 검사하게 되며
//반환 값이 0보다 작은 경우 a가 b보다 앞에 있어야 하고
//0과 같을 경우 순서 바꿀필요 없고
//0보다 큰 경우 b가 a보다 앞에 있어야한다는 규칙으로 정렬이 된다.


