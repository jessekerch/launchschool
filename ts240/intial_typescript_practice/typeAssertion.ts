let age: number | unknown = '30';
age = (age as string).length;
console.log(age);