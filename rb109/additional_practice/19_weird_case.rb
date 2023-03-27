=begin

Write a function toWeirdCase (weirdcase in Ruby) that accepts a string,
and returns the same string with all even indexed characters
in each word upper cased, and all odd indexed characters
in each word lower cased.

The indexing just explained is zero based, so the zero-ith index is even,
therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' ').
Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Problem:
Capitalize each even index letter and lowercase each odd index letter in each word
input: string, sentence or word or words whitespace delim
output: string, weird case adjusted

Examples:
weirdcase( "String" )#=> returns "StRiNg"
weirdcase( "Weird string case" );#=> returns "WeIrD StRiNg CaSe"

Data:
input: string
output: string
interm: array probably

Algo:
define weirdcase method to take one parameter, str
split str into array of words (whitespace delim)
iterate index from 0 up to string size -1
  if index is even, uppercase (destructive) the character
  if index is odd, lowercase (destructive) the character
join the array of words back together with whitespaces
return str in weird case

=end

def weirdcase(str)
  weird_arr = []
  str.downcase.split.each do |word|
    word.split('').each_with_index do |char, idx|
      idx.even? ? word[idx] = char.upcase : word[idx] = char.downcase
    end
    weird_arr << word
  end
  weird_arr.join(' ')
end

p weirdcase('This') #== 'ThIs'
p weirdcase('is') #== 'Is'
p weirdcase('This is a test') #== 'ThIs Is A TeSt'
