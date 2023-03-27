=begin
OCT-20 NOT FINISHED!!
Couldn't get multiple symbols saved and back into the word rigth.
Gotta try again after interview assessment tomorrow. ;)

9.Typoglycemia Generator
(https://www.codewars.com/kata/55953e906851cf2441000032/train/ruby)
5 kyu

=begin
Background
There is a message that is circulating via public media that claims a
reader can easily read a message where the inner letters of each words is scrambled,
as long as the first and last letters remain the same and the word contains all the letters. 

Another example shows that it is quite difficult to read the text where all the
letters are reversed rather than scrambled.

In this kata we will make a generator that generates text in a similar pattern,
but instead of scrambled or reversed, ours will be sorted alphabetically

Requirement
return a string where:

1) the first and last characters remain in original place for each word
2) characters between the first and last characters must be sorted alphabetically
3) punctuation should remain at the same place as it started, for example: shan't -> sahn't

Assumptions

1) words are separatedseperated by single spaces
2) only spaces separate words, special characters do not, for example: tik-tak -> tai-ktk
3) special characters do not take the position of the non special characters, for example: -dcba -> -dbca
4) for this kata punctuation is limited to 4 characters: hyphen(-), apostrophe('), comma(,) and period(.)
5) ignore capitalisation

for reference: http://en.wikipedia.org/wiki/Typoglycemia

Problem:
scramble words by sorting middle of word alphabetically, leaving first and last letters
input: string
output: string, modified
rules:
symbols must stay in the same place
words are separated by whitespace

Example:
"you've gotta dance" => "you've gotta dacne"
you've => youve => y ouv e => youve => you've
card-carrying => c ardcarryin g => c aacdinrrry g => caacdinrrryg
caacdinrrryg => '-' was in the index 4 position

Algo:
set mod_arr variable = empty array []
if input string is <= 2 characters, return input string
split str into array of strings (whitespace delim)
for each word
  set mod_word variable = empty string ""
  add to mod_word the word index 0 character
  add word index 1 through -2 characters
  add word index -1 character
  remove any symbols (-',.) and save with index
  insert back any symbol at the correct index
  add mod_word to mod_arr

join mod_arr back into string with whitespace delim (' ')
return joined mod_arr
=end

def scramble_words(str)
  mod_arr = []
  return str if str.size <= 2
  str.split(' ').each do |word|
    # first remove and save any symbols
    cut_str = ""
    cut_idx = 0
    cut_arr = []
    word.chars.each_with_index do |ch, idx|
      cut_arr = []
      p ch
      unless ("a".."z").include?(ch)  
        cut_arr << [ch, idx]
      end
    end
    word.gsub!(/[^A-Za-z]/, "")
      #
    mod_word = ""
    mod_word << word[0]
    mod_word << word[1..-2].chars.sort.join
    mod_word << word[-1]

    # add the modified word to the mod word array
    cut_arr.each do |cut_ch, cut_idx|
      p cut_ch, cut_idx
      mod_word = mod_word.insert(cut_idx, cut_ch)
      p mod_word
    end
    mod_arr << mod_word
  end
  mod_arr.join(' ')
end


# p scramble_words('professionals') == 'paefilnoorsss'
# p scramble_words('i') == 'i'
# p scramble_words('') == ''
# p scramble_words('me') == 'me'
# p scramble_words('you') == 'you'
p scramble_words('card-carrying') #== 'caac-dinrrryg'
# p scramble_words("shan't") == "sahn't"
# p scramble_words('-dcba') == '-dbca'
# p scramble_words('dcba.') == 'dbca.'
# p scramble_words("you've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth.") #== "you've gotta dacne like teehr's nbdooy wachintg, love like ylo'ul neevr be hrut, sing like teehr's nbdooy leiinnstg, and live like it's haeevn on earth."
