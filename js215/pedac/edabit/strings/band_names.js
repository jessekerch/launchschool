// Create a function that sorts the given array of band names discounting the articles "The", "A", "An" if the first word of the name categorically belongs to.
// Examples

function bandNamesSort(bands) {
  bands.sort((a, b) => {
    if ['A', 'An', 'The'].includes(a.split(' ')[0]) {
      return 
    }
  });

}

bandNamesSort(["The New Yardbirds", "The Beatles", "The Square Roots", "On A Friday", "An Irony"])
// ➞ ["The Beatles", "An Irony", "The New Yardbirds", "On A Friday", "The Square Roots"]

// bandNamesSort(["The Platters", "A Yard of Yarn", "The Everly Brothers", "A Monster Effect", "The Sex Maggots"])
// ➞ ["The Everly Brothers", "A Monster Effect", "The Platters", "The Sex Maggots", "A Yard of Yarn"]

// bandNamesSort(["But Myth", "An Old Dog", "Def Leppard", "The Any Glitters", "The Dawn"])
// ➞ ["The Any Glitters", "But Myth", "The Dawn", "Def Leppard", "An Old Dog"]