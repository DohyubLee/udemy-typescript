// section8 (데코레이터)
// js로 변환할때 에러는 나지만 서버실행시 정상동작함

function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

@Logger // 밑에 클래스 생성자부분이 로그됨
class Person {
  name = "Max";

  constructor() {
    console.log("Creating person object...");
  }
}

const pers = new Person(); // 생성자 실행됨

console.log(pers);
