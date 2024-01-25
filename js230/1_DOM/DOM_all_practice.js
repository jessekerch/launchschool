let ranks = ['Kingdom', 'Phylum', 'Class', 'Order', 'Family', 'Genus', 'Species'];

let classification = {};
let nodes = document.querySelectorAll('.infobox td');
let array = [].slice.call(nodes);
let group;

ranks.forEach(rank => {
  array.forEach(td => {
    if (td.textContent.includes(rank)) {
      group = td.nextElementSibling.textContent.replace(/[^a-z]/gi, '');
      classification[rank] = group;
    }
  });
});

console.log(classification);

