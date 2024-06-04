//* 이 파일은 기본 함수 연습 파일임

function workOne(a, b) {
  //* logic : 매개변수 두개를 받은 다음
  //* logic : return은 객체였음 좋겠다.
  let localVariable = {};
  //? localVariable 초기화 시키기

  localVariable[a] = a;
  localVariable[b] = b;

  return localVariable;
}

let test = workOne('이연승', '정호연');
console.log(test);

// ! 아래의 let test = workOne();으로 a = '이연승', b = '정호연'으로 값이 정해짐
