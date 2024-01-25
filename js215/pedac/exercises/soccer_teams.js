/*
Create a function that takes an array of football clubs with properties: name, wins, loss, draws, scored, conceded, and returns the team name with the highest number of points. If two teams have the same number of points, return the team with the largest goal difference.
How to Calculate Points and Goal Difference

team = { name: "Manchester United", wins: 30, loss: 3, draws: 5, scored: 88, conceded: 20 }

Total Points = 3 * wins + 0 * loss + 1 * draws = 3 * 30 + 0 * 3 + 5 * 1 = 95 points
Goal Difference = scored - conceded = 88 - 20 = 68

input - array of objects (each has 6 properties)
return - string (name prop of one of the obj inputs) -- obj with "highest points"
  - if two objs have same points, return obj.name with highest obj.scored - obj.conceded

key: calculate for each obj in input array the points 
   - total points formula
    ... (3 * wins) + (0 * loss) + (1 * draws)

reqs:
- only one arg
  - always an array of objs
    - if a prop does not exist, assume is 0
      - wins-conceded: if exists, will be positive integer
      - name: always a string
    - no other props 
    - no props with different formatting
  - duplicate obj.name els?? -> could be, if so... add total points together
  - always will be > 1 el in input array

data structure:
obj
{ name: [pts, goalDif], name2: [pts, goalDif]}
obj.name[0] += extraPts
convert to array of arrays for sorting and finding max pts / max goalDif
[[name, [pts, goalDif]]].sort() => sort by pts, ascending

algo:
- no guard clauses
- piece of cleanup to remember: if prop doesnt exist is Number 0

- create a result object
- for input array, loop num els
  - for each object element...
    - calculate 2 things: total points and goal difference....
      *** remember || 0 for props that dont exist
    - conditional: if result object has a prop with currentEl.name
       then increment total points and goalDif values
      else 
        create a new propery with key: name
                                  value: array with 2 els, numbers for: points and goalDif
- convert result object to array of arrays
- sort array of arrays by total points
- determine if second to last el and last el points are the same
  - if not, return name of last el
  - if are same...
    - conditional: determine which of 2 els has max goalDif, and return this el's name
      - splice the array so that only have the last 2 els in a new array of arrays
       - sort this sliced array based on goalDif ie... el[1][1]
       - return name of last element in sorted array
     
*/

// function champions(teams) {
//   let result = {};
//   for (let idx = 0; idx < teams.length; idx += 1) {
//     let obj = teams[idx];
//     let points = (3 * (obj.wins || 0)) + (obj.draws || 0);
//     let goalDif = (obj.scored || 0) - (obj.conceded || 0);
//     if (result[obj.name]) {
//       result[obj.name][0] += points;
//       result[obj.name][1] += goalDif;
//     } else {
//       result[obj.name] = [points, goalDif];
//     }
//   }

//   result = Object.entries(result);
//   result.sort((teamA, teamB) => teamA[1][0] - teamB[1][0]);
//   // console.log(result);
//   if (result.at(-2)[1][0] === result.at(-1)[1][0]) {
//     let lastTwo = result.slice(-2);
//     lastTwo.sort((teamA, teamB) => teamA[1][1] - teamB[1][1]);
//     return lastTwo.at(-1)[0];
//   } else {
//     return result.at(-1)[0];
//   }
 
// }

function champions(array) {
  
}

console.log(champions([
  {
    name: "Manchester United",
    wins: 30,
    loss: 3,
    draws: 5,
    scored: 88,
    conceded: 20,
  },
  {
    name: "Arsenal",
    wins: 24,
    loss: 6,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
  {
    name: "Chelsea",
    wins: 22,
    loss: 8,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
  {
    name: "Chelsea",
    wins: 1,
  },  ]));
// ➞ "Manchester United"

console.log(champions([
  {
    name: "Manchester United",
    wins: 30,
    loss: 3,
    draws: 5,
    scored: 88,
    conceded: 20,
  },
  {
    name: "Arsenal",
    wins: 24,
    loss: 6,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
  {
    name: "Chelsea",
    wins: 30,
    loss: 10,
    draws: 5,
    scored: 98,
    conceded: 20,
  },
   ]));
// ➞ "Chelsea"

