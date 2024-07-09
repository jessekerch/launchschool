// let isStudent: any = true;
// let school: string = isStudent;
// console.log(school.toLowerCase());
// // No compile-time error but yes runtime error

type Student = {
  id: number;
  name: string;
}

function greetStudent(student: any) {
  console.log(`Hello ${student.fullname}!`);
}

const student: Student = {id: 1, name: 'Antonina'};
greetStudent(student);
