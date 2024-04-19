// 関数宣言文
console.log(add(3, 4));
function add(a, b) {
  return a + b;
}

// 関数式
console.log(add(4, 2));
sayhi = function hi() {
  return "hi";
};
console.log(sayhi());

// 無名関数
const person = {
  name: "soshi",
  sayhi: function () {
    return "hey";
  },
};
console.log(person.sayhi());

// ARROW関数
sayhi = (name) => `Hi ${name}`;
console.log(sayhi("yohi"));

// デフォルトパラメータ
sayhi = (name = "User", message) => `hi ${name} ${message}`;
console.log(sayhi("soshi", "konnnitiha"));

let sum = (a, b, ...nums) => {
  console.log(nums);
  let total = 0;
  for (num of nums) {
    total += num;
  }
  return total;
};
console.log(sum(1, 3, 5, 3, 4, 5, 7));

let subtract = (a, b, callback) => {
  let result = a - b;
  callback(result);
};
subtract(4, 3, (result) => {
  console.log(result);
});
subtract(10, 3, (result) => {
  console.log(result);
});
