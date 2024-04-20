let generatePerson = () => {
  let age = 0;
  return {
    name: "soshi",
    getAge: () => age,
    incrementAge: () => {
      age += 1;
      return age;
    },
  };
};
const soshi = generatePerson();
console.log(soshi.getAge());
soshi.incrementAge();
soshi.incrementAge();
console.log(soshi.getAge());

let factorial = (n) => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};
console.log(factorial(3));
console.log(factorial(5));
console.log(factorial(0));
