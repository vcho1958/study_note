//Date는 자바스크립트에 내장된 객체의 한 종류

let date = new Date();//현재 시간값을 객체로 date변수에 저장
console.log(typeof (date))//object출력
console.log(date)//2021-06-21T16:46:16.878Z 출력

date = new Date(1000)//1970년 1월 1일 0시0분0초+1000밀리초의 값으로 Date객체를 생성해서 저장
console.log(date)


//YYYY-MM-DD
date = new Date('2021-06-04')
console.log(date)

//YYYY-MM-DDThh:mm:ss T이루부턴 시간값임
date = new Date('2021-06-04T21:52:21')
console.log(date)

//YYYY,MM,DD,hh,mm,ss 날짜이후부턴 생략가능
date = new Date(2020, 5, 4) //month의 경우 0부터 시작하므로 주의! 6월하고싶으면 5 입력해야함
console.log(date)



//메소드
//Date.getTime()
console.log(date.getTime())//1970년 1월1일 00:00:00부터 몇 밀리초 지났는지 반환 - 시간 간격 구할 때 쓰임 time stamp라고도 함 밀리초 이므로
//date.getTime()/1000 초단위
//date.getTime()/1000/60 분단위
//date.getTime()/1000/60/60 시간단위


//Date.getFullYear()
//Date.getMonth() //0: 1월 ~ 11: 12월
//Date.getDate() 
//Date.getDay() //요일! 0:일요일 ~ 6:토요일
//Date.getHours()
//Date.getMinutes()
//Date.getSeconds()
//Date.getMilliseconds()


Date.now()//호출시점 milliseconds 반환하므로 뺄셈 연산으로 시간측정에 사용! 



date = Date() //현재 시간값을 문자열로 변수에 저장
console.log(typeof (date))//string출력
console.log(date)//Tue Jun 22 2021 01:45:09 GMT+0900 (대한민국 표준시)


date = String(new Date())
console.log(date + 'String 형변환')//위와 동일
date = Number(new Date())
console.log(date + 'Number 형변환')//getTime()처럼 밀리세컨드 반환
date = Boolean(new Date())
console.log(date + 'Boolean 형변환')//객체이므로 무조건 true







