// section8 (데코레이터)
// js로 변환할때 에러는 나지만 서버실행시 정상동작함

// function Logger(constructor: Function) {
//   console.log("Logging...");
//   console.log(constructor);
// }

// @Logger // 밑에 클래스 생성자부분이 로그됨
// class Person {
//   name = "Max";

//   constructor() {
//     console.log("Creating person object...");
//   }
// }

// const pers = new Person(); // 생성자 실행됨

// console.log(pers);

// function Logger1(logString: string) {
//   // 아래 리턴 되는게 데코레이터 함수
//   return function (constructor: Function) {
//     console.table({ logString });
//     console.log(constructor);
//   };
// }

// @Logger1("LOGGING - PERSON") // 인자를 전달할수 있음
// class Person1 {
//   name = "Max";

//   constructor() {
//     console.log("Creating person object...");
//   }
// }

// const pers1 = new Person1(); // 생성자 실행됨

// console.log(pers1);

function WithTemplate(template: string, hookId: string) {
  // 밑에가 데이코레이터 함수
  // return function (_: Function) // constructor가 필요없을시 의미적으로 _로 쓰기도함
  return function (constructor: any) {
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

@WithTemplate("<h1>My Person Object</h1>", "app")
class Person2 {
  name = "Max";

  constructor() {
    console.log("Creating person object...");
  }
}

// const pers2 = new Person2(); // 생성자 실행됨

// console.log(pers2);
