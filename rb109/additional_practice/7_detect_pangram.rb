=begin

A pangram is a sentence that contains every single letter of the alphabet
at least once. For example, the sentence "The quick brown fox jumps over
the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is,
False if not. Ignore numbers and punctuation.

input: string
output: boolean
rules: case insensitive, but letters aren't necessarily lowercase

Example:
The quick brown fox jumps over the lazy dog => remove anything but letters
thequickbrownfoxjumpsoverthelazydog => sort
abcdeeefghhijklmnoooopqrrsttuuvwxyz => unique only
abcdefghijklmnopqrstuvwxyz == abcdefghijklmnopqrstuvwxyz => true

Data:
input: string
output: boolean
interm: array

Steps:
define method that takes on parameter, string object "string"
make all string characters lowercase
remove any non-alphabetical characters from string
convert string to array, sort, and keep only unique characters
join array back into a string
return boolean if string = abcdefghijklmnopqrstuvwxyz

=end

def pangram?(string)
  string.gsub(/[^a-z]/,"").chars.sort.uniq.join == "abcdefghijklmnopqrstuvwxyz"
end

p pangram?("The quick brown fox jumps over the lazy dog.") #== true
p pangram?("This is not a pangram.") #== false