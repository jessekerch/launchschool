const rlSync = require('readline-sync');

function studentGrade() {
  totalScore = 0;

  for (let count = 1; count <= 3; count += 1) {
    input = rlSync.question(`Enter score ${count}: `);
    totalScore += parseInt(input, 10);
  }

  let score = totalScore / 3;

  if (score >= 90) {
    grade = 'A';
  } else if (score >= 70) {
    grade = 'B';
  } else if (score >= 50) {
    grade = 'C';
  } else {
    grade = 'F';
  }
  console.log(`Based on the average of your 3 scores, your letter grade is ${grade}`);
}

studentGrade();
