let OK = false;
let maybeok = true;
if (OK) {
  console.log("OK");
} else if (maybeok) {
  console.log("maybe...ok");
} else {
  console.log("no");
}

ok = 1 === 1;
console.log(ok);
ok = 1 == "1";
console.log(ok);
ok = 1 === "1";
console.log(ok);

const coffee1 = { name: "cafe latte" };
const coffee2 = { name: "cafe latte" };
equal = coffee1 === coffee2;
console.log(equal);
const coffee3 = coffee1;
equal = coffee1 === coffee3;
console.log(equal);
equal = coffee1.name === coffee2.name;
console.log(equal);

ok = 1 > 0;
console.log(ok);

ok = "hello";
if (ok) {
  console.log(ok);
  console.log("ok");
} else {
  console.log("no");
}

ok = true && true;
console.log(ok);
ok = true || true;
console.log(ok);
ok = "helo" && "hi";
console.log(ok);
ok = "oouu" || "heii";
console.log(ok);

const userInput = "";
const userName = userInput || "User";
console.log(userName);

// 演算子の優先順位
const x = 15;
ok = x > 10 && x < 20;
ok = x === 10 || (x > 12 && userName);
console.log(ok);
if (ok) {
  console.log("yeah");
} else {
  console.log("no");
}

ok = !true;
ok = !"hello";
ok = !x;
ok = !!x;
console.log(ok);

const hello = "hello1";
{
  const hello = "hello2";
  console.log(hello);
}
console.log(hello);

// 3項演算子
ok = "hello";
ok = false;
ok = ok ? "ok" : "no";
console.log(ok);

function vegetableColor(vegetable) {
  switch (vegetable) {
    case "tomato": {
      const message = `${vegetable} is orange`;
      console.log(message);
      break;
    }
    case "carrot":
    case "pumpkin": {
      const message = `${vegetable} is orange`;
      console.log(message);
      break;
    }
    case "onion":
      console.log("onion is white");
      break;
    default:
      console.log("not find");
  }
  //   if (vegetable === "tomato") {
  //     console.log("tomato is red");
  //   } else if (vegetable === "pumpkin") {
  //     console.log("pumpkin is orange");
  //   } else if (vegetable === "onion") {
  //     console.log("onion is white");
  //   }
}
// vegetableColor("carrot");
let count = 0;
while (count < 10) {
  console.log("while:" + count);
  count++;
}

let tomatoCount = 100;
do {
  console.log("do-while:" + tomatoCount);
  tomatoCount++;
} while (tomatoCount < 10);

for (let pumpkinCount = 1, i = 0; pumpkinCount < 10; pumpkinCount++, i++) {
  console.log(`${i}回目`);
  console.log(pumpkinCount);
}

const fruits = ["apple", "banana", "grape", "orange", "mango"];
for (let i = 0; i < 5; i++) {
  console.log(fruits[i]);
}
// 配列を取りたいときはfor_of
for (const fruit of fruits) {
  console.log(fruit);
}

const coffee = {
  name: "caffe latte",
  size: 350,
  ishot: true,
};
for (const key in coffee) {
  // コンテニューはスキップ（サイズをスキップ）
  if (key === "size") {
    console.log("continue");
    continue;
  }
  console.log(key);
  console.log(coffee[key]);
}

try {
  console.log("try");
  console.log(chocolate);
} catch {
  console.log("catch");
} finally {
  console.log("finally");
}
throw "error";
