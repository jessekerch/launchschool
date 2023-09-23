function namer(first, middle1, middle2, middle3, last) {
  return {
    first,
    last,
    middle: [middle1, middle2, middle3].sort(),
  };
}

const nameArgs = ['John', 'Malfoy', 'Arkansas', 'Richie', 'Peterson'];
let { first, last, middle } = namer(...nameArgs);
console.log(first, middle.join(' '), last);


