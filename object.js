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
console.log(person["const"]);
