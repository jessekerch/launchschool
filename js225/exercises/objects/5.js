function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
    info() {
      console.log(`${this.name} is a ${this.year} student`)
    },

    listCourses() {
      console.log(this.courses);
    },

    addCourse(course) {
      this.courses.push(course);
    },

    addNote(num, note) {
      let course = this.courses.find((course) => course.code === num);
      if (course) {
        if (course.note) {
          course.note += ('; ' + note);
        } else {
          course.note = note;
        }
      }
    },

    addGrade(num, grade) {
      let course = this.courses.find((course) => course.code === num);
      console.log(`${this.name}'s course ${course}`);
      if (course) {
        course.grade = grade;
      }
    },

    viewNotes() {
      this.courses.forEach((course) => {
        if (course.note) {
          console.log(course.name + ': ' + course.note);
        }
      });
    },

    updateNote(num, note) {
      let course = this.courses.find((course) => course.code === num);
      if (course) {
        course.note = note;
      }
    },
  };
}


let school = {
  students: [],
  addStudent(name, year) {
    if (['1st', '2nd', '3rd', '4th', '5th'].includes(year)) {
      let student = createStudent(name, year);
      this.students.push(student);
      return student;
    } else {
      console.log('Invalid year');
    }
  },

  enrollStudent(student, name, code) {
    student.addCourse({ name: name, code: code });
  },

  addGrade(student, code, grade) {
    student.addGrade(code, grade);
  },

  getReportCard(student) {
    if (student) {
      student.courses.forEach((course) => {
        if (course.grade) {
          console.log(`${course.name}: ${course.grade}`);
        } else {
          console.log(`In Progress`);
        }
      });
    }
  },

  courseReport(courseName) {
    console.log(`=${courseName} Grades=`);
    let grades = [];
    this.students.forEach((student) => {
      let course = student.courses.find((course) => course.name === courseName);
      if (course) {
        let grade = course.grade;
        if (grade) {
          grades.push(grade);
          console.log(`${student.name}: ${grade}`);
        }
      }
    });
    if (grades.length > 0) {
      let avg = grades.reduce((sum, num) => sum + num) / grades.length;
      console.log('---------');
      console.log(`Course Avg: ${parseInt(avg, 10)}`);
      console.log('         ');
    } else {
      console.log('undefined');
      console.log('         ');
    }
  },
}

let foo = school.addStudent('foo', '3rd');
let bar = school.addStudent('bar', '1st');
let qux = school.addStudent('qux', '2nd');

foo.info();
// "Foo is a 3rd year student"
foo.listCourses();
// [];

school.enrollStudent(foo, 'Math', 101);
school.enrollStudent(foo, 'Advanced Math', 102);
school.enrollStudent(foo, 'Physics', 202);
school.enrollStudent(bar, 'Math', 101);
school.enrollStudent(qux, 'Math', 101);
school.enrollStudent(qux, 'Advanced Math', 102);

foo.listCourses();

school.addGrade(foo, 101, 95);
school.addGrade(foo, 102, 90);
school.addGrade(bar, 101, 91);
school.addGrade(qux, 101, 93);
school.addGrade(qux, 102, 90);

foo.listCourses();
// school.getReportCard(foo);
// = Math: 95
// = Advanced Math: 90
// = Physics: In progress

school.courseReport('Math');
// // = =Math Grades=
// // = foo: 95
// // = bar: 91
// // = qux: 93
// // = ---
// // = Course Average: 93

school.courseReport('Advanced Math');
// // = =Advanced Math Grades=
// // = foo: 90
// // = qux: 90
// // = ---
// // = Course Average: 90

school.courseReport('Physics');
// = undefined