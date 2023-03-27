=begin

35. Mexican Wave
(https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/ruby)
6 kyu

In this 
simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string
in an array where an uppercase letter is a person standing up.
Rules
     1.  The input string will always be lower case but maybe empty.
     2.  If the character in the string is whitespace then pass over it as if it was an empty seat.
     
Problem: Mexican Wave
input: string
output: array of strings
rules:
blank input returns blank array
input is otherwise all lowercase alphabet
return is array of strings with one capital letter each, in a different position

Example:
"hello" => ["Hello", "hEllo", "heLlo" etc.]

Data:
input: string
output: array

Algo:
define method wave to take one string parameter "str"
set "wave_arr" to empty array []
iterate "idx" from 0 to string size - 1
  skip to next iteration if character at str index idx is " "
  make "wave_str" and set to return value of iterating each char in str and capitalizing the index "idx" character only
  add "wave_str" string to the "wave_arr" array

return array "wave_arr"


=end

def wave(str)
  wave_arr = []
  0.upto(str.size - 1) do |idx|
    next if str[idx] == " "
    wave_arr << str.chars.map.each_with_index { |c, i| i == idx ? c.upcase : c }.join
  end
  wave_arr
end

p wave("hello") == ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
p wave("codewars") == ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"]
p wave("") == []
p wave("two words") == ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]
p wave(" gap ") == [" Gap ", " gAp ", " gaP "]
