const person: {
  name: string;
  age: number;
  role: [number, string, string]; // 튜플 타입 배열에 정해진 순서의 타입과 개수를 설정함
} = {
  name: "dddd",
  age: 30,
  role: [2, "dddd", "cccc"],
};

enum Role {
  ADMIN = "ddd",
  READ = "ccc",
  AUTHOR = 2,
}

console.log("enum test", Role.ADMIN);

console.log(person.age);
