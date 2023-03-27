=begin
40. Duplicate Encoder
(https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/ruby)
6 kyu
The goal of this exercise is to convert a string to a new string where each
character in the new string is "(" if that character appears only once in the original string,
or ")" if that character appears more than once in the original string.
Ignore capitalization when determining if a character is a duplicate.

Problem:
Duplicate encoder
input: string
output: string, encoded with ( or )
rules: case insensitive when counting
can be a symbol or even whitespace

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

Data:
input string
output string

Algo:
define method to take one parameter "str"
make str all characters lowercase
make "code" set to empty string ""
iterate "idx" index from 0 to str size - 1 
  if idx index character count is > 1
    add ) to code
  else if idx index character count is 1
    add ( to code
    
return code variable, coded with ( and )

=end

def duplicate_encode(str)
  code = ""
  str = str.downcase
  0.upto(str.size - 1) do |idx|
    if str.count(str[idx]) == 1
      code << "("
    elsif str.count(str[idx]) > 1
      code << ")"
    end
  end
  code
end

p duplicate_encode("din") == "((("
p duplicate_encode("recede") == "()()()"
p duplicate_encode("Success") == ")())())"
p duplicate_encode("(( @") == "))(("
