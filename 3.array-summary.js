//배열은 프로퍼티네임이 정수인 object이며
//Date처럼 기본 메소드가 지정된 object이다.
let a = [2, 4, 6];
let b = Array(2, 4, 6);
console.log(a);
console.log(b);
let f = [2, function (a) { console.log(a) }];//object와 마찬가지로 함수도 요소로 추가할 수 있다.
console.log(f)
f[1]('jhc')//이런 식으로 호출도 가능

console.log(...a)//이렇게 요소를 하나하나 해체할 수도 있다 2 4 6 출력

for (let p in a) {
  console.log(p);
}

for (let v of a) {
  console.log(v);
}

b.push(1)//다음 인덱스에 1 추가
b[6] = 0;//object 처럼 할당안된 곳에 직접 프로퍼티를 할당할 수 있다.
console.log(b);//대신 중간에 빈 곳은 undefined가 자동으로 대입된다.
delete b[2]
console.log(b)//마찬가지로 해당인덱스에 undefined를 대입한다. 따라서 length는 변화하지 않는다.
//그래서 완전히 제거하고 싶다면 메소드를 활용하여 새로운 배열을 반환해야한다.

b.length//길이 반환(최대인덱스+1)
console.log(b.length)
console.log(b['length'])//object이기 때문에 property에 이렇게 접근이 가능하다.


//메소드
b.splice(6);//6번 인덱스부터 끝까지 제거. length도 변화한다.
console.log(b);
b.splice(0, 1)//0번 인덱스부터 1개요소 제거
console.log(b);
b.splice(1, 1, 'a', 'b')//1번 인덱스부터 1개요소 제거한 후 1번인덱스부터 'a'와 'b'를 대입한다.
console.log(b)//연결리스트 insert와 동작이 비슷함!

console.log(b.shift())//첫 인덱스요소 반환후 삭제
console.log(b)
console.log(b.pop())//마지막 인덱스요소 반환 후 삭제
console.log(b)
b.unshift(2)//맨앞에 요소 추가
console.log(b)
b.push(2)//맨 뒤에 요소 추가
console.log(b);

console.log(b.indexOf(2))//2가 가장 처음 나오는 인덱스 반환
console.log(b.lastIndexOf(2))//2가 마지막으로 나오는 인덱스 반환
console.log(b.includes('c'))//값이 있는지 불린으로 리턴
console.log(b.includes('b'))
b.reverse()//배열 순서 뒤집기 원본 수정
console.log(b)



console.log(b.slice(3))//원본수정 x 3번부터 끝까지의 요소를 가진 또다른 배열을 반환
console.log(b.slice(1, 5))//원본수정 x 1번부터 (5-1)번 인덱스 사이의 배열을 반환
console.log(b.slice(-1))//이렇게 파이썬처럼 음수 인덱스도 지원한다.


console.log(b.join())//모든 요소를 문자열로 합쳐서 출력 원본 수정 x
console.log(b.toString())//원본 수정 x
console.log(b.sort())