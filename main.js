/* 변수란?
   변경 가능한 값을 저장하기 위한 기억 공간(memory)
   사용하기 전 반드시 선언 필요
   중복선언 불가능
   키워드: let 
*/

let A = 123;
console.log(A);

A = 456;
console.log(A);

// let A = 789; Syntax error

/* 상수란?
    변경 불가능한 값을 저장하기 위한 기억 공간
    사용하기 전 반드시 선언 필요
    중복 선언 불가능
    키워드: const
*/

const B = 123; // 상수 선언 및 값 초기화
console.log(B);// Output: 123

// B = 456; // TypeError

// const C; // Syntax Error 값을 설정하지 않음
C = 123;

// 선언 후 할당
let hi;
hi = "hello";

// 선언과 동시에 초기화
let halo = "Hello!";

// 한 줄에 여러 변수 선언과 초기화
let name = "john", age = 13, msg = "hello";

// 상수는 보통 대문자로 표기
const TESTCASE = 5;
const BIRTHDAY = "2000.1.1";

/* 호이스팅(Hosting)
    코드에 선언된 변수 및 함수를 유효한 범위의 코드 상단으로 끌어 올리는 작업
    var의 변수/함수의 선언만 위로 올려지고, 할당은 올려지지 않음
    let/const 변수 선언과 함수 표현식에는 호이스팅 발생하지 않음
*/

// using var
console.log(username);
var username = 'john';
console.log(username); // 출력이 됨

// hosting
var username_2;
console.log(username_2);
username_2 = 'john';
console.log(username_2);

console.log(username_3);
let username_3 = 'john';
