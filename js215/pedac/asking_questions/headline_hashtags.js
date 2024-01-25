// Write a function that retrieves the top 3 longest words of a newspaper headline and transforms them into hashtags. If multiple words tie for the same length, retrieve the word that occurs first.

// Notes

//     If the title is less than 3 words, just order the words in the title by length in descending order (see example #4).
//     Punctuation does not count towards a word's length.

// Examples

/*
input: string, or array of strings
return: array of longest strings, 3 or less, all lowercase, as hashtags ('#' + string), in descending order of string length

rules:
input is string, or array of strings
if input is empty string, just return empty array
only lowercase letters (no uppercase), or digits, in return string
only include alphanumeric characters in return string

if there are less than 3 words, return those words in descending length order
same length can be in original order in headline 
add # to beginning of each word before returning 
return 3 longest words as an array

algo:
if input is empty string or empty array, return empty array
if input is string
  - replace non-alphanumeric chars (but not spaces!) with blank string ''
  - split it it in an array of words with single space

- make each array element a lowercase string 
- sort the array of strings by string length, descending
- slice the first three elements of the array, starting at index 0
- map each element and add '#' at beginning of the string
  - replace each string with '#' + word

- return the array

*/

function getHashTags(headline) {
  if (headline.length === 0) return [];
  let words = headline;

  if (typeof headline === 'string') {
    headline = headline.replace(/[^A-Za-z0-9 ]/g, '');
    words = headline.split(' ');
  }
  
  words = words.map((word) => word.toLowerCase());
  words.sort((a, b) => b.length - a.length);
  let longestWords = words.slice(0, 3);
  return longestWords.map((word) => '#' + word);
}

console.log(getHashTags("How,.,$ the Avocado Became the Fruit of the Global Trade"));
//➞ ["#avocado", "#became", "#global"]

console.log(getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year"));
//➞ ["#christmas", "#probably", "#will"]

console.log(getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit"));
//➞ ["#surprise", "#parents", "#fruit"]

console.log(getHashTags([
  'Hey',       'Parents',
  'Surprise', 'Fruit',
  'Juice',     'Is',
  'Not',       'Fruit'
]));
//➞ ["#surprise", "#parents", "#fruit"]

console.log(getHashTags("Visualizing Science"));
//➞ ["#visualizing", "#science"]

console.log(getHashTags(""));
//➞ []

console.log(getHashTags([]));
//➞ []
