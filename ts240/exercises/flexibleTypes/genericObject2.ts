interface MathScores<Student, Scores> {
  student: Student;
  scores: Array<Scores>;
}

const JesseScores: MathScores<string, number> = {
  student: 'Jesse',
  scores: [65, 70, 89],
}

const HannahScores: MathScores<number, string> = {
  student: 12,
  scores: ['65', '70', '89'],
}
