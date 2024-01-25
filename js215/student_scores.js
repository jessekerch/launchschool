let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function average(array) {
  let avgNum = array.reduce((sum, num) => sum + num) / array.length;
  return Math.round(avgNum * 10) / 10;
}

function getExamStats(studentScores) {
  let exams = [[], [], [], []];
  studentScores.forEach((student) => {
    student.forEach((score, idx) => {
      exams[idx].push(score);
    });
  });
  return exams;
}

function getAvgMinMax(numbers) {
  return {
    average: average(numbers),
    minimum: Math.min(...numbers),
    maxiumum: Math.max(...numbers),
  }
}

function letterGrade(grade) {
  if (grade >= 93) {
    return 'A';
  } else if (grade >= 85) {
    return 'B';
  } else if (grade >= 77) {
    return 'C';
  } else if (grade >= 69) {
    return 'D';
  } else if (grade >= 60) {
    return 'E';
  } else {
    return 'F';
  }
}

function generateClassRecordSummary(data) {
  let scores = Object.values(data)
                     .map((student) => student.scores);

  let exams = scores.map((student) => student.exams);
  let examStats = getExamStats(exams)
                  .map((exam) => getAvgMinMax(exam));

  let examAvgs = exams.map((exam) => average(exam));

  let exercises = scores.map((score) => score.exercises)
                        .map((scores) => scores.reduce((sum, score) => sum + score));

  let pctGrades = examAvgs.map((_, idx) => {
    return Math.round(examAvgs[idx] * .65 + exercises[idx] * .35);
  });

  let studentGrades = pctGrades.map((pct) => `${pct} (${letterGrade(pct)})`);
  
  return result = {
    'studentGrades': studentGrades,
    'exams': examStats,
  };
}

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }