//* 이 파일은 기본 함수 연습 파일임

function workOne(a, b) {
  //* logic : 매개변수 두개를 받은 다음
  //* logic : return은 객체였음 좋겠다.
  if (typeof a === 'string') {
    if (typeof b === 'string') {
      let localVariable = {};
      //? localVariable 초기화 시키기
      localVariable[a] = a;
      localVariable[b] = b;

      return localVariable;
    } else {
      console.error('문자열로 바꿔라');
    }
  } else {
    console.error('문자로 바꿔라');
  }
  //* condition : 매개변수 모두 문자열이여야 한다.
}

let test = workOne('1', '2');
console.log(test);

// ! 아래의 let test = workOne();으로 a = '이연승', b = '정호연'으로 값이 정해짐
