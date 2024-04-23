const interests = "interests";
const person = {
  name: "soshi",
  age: 22,
  greeting: function () {
    return "hello";
  },
  const: "const",
  [interests]: ["music", "travel"],
};
for (const key in person) {
  console.log(key);
}
console.log(person["const"]);
console.log(Object.keys(person));
// for (const key of Object.keys(person)) {
//   console.log(key);
// }
console.log(Object.entries(person));

// プロパティ削除
person.name = "jack";
person.gender = "man";
delete person.age;
console.log(person);

// 省略記法
const name = "espresso";
const size = 350;
const coffee = {
  name,
  size,
};
console.log(coffee);
// スプレット構文
const coffee2 = {
  ...coffee,
  ishot: true,
};
console.log(coffee2 === coffee);

const o1 = { a: 1 };
const o2 = { a: 2, b: 2 };
const o3 = { a: 2, b: 2, c: 3 };
Object.assign(o1, o2, o3);
console.log(o1);

const book = {
  title: "book course",
  price: 9.99,
};
// const title = book.title;
const { title, price } = book;
console.log(title, price);
