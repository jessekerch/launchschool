interface Person {
  name: string;
  age: number;
}

interface Employee extends Person { 
  employeeId: number;
}

const Jesse: Employee = {
  name: 'Jesse',
  age: 32,
  employeeId: 3461,
}

