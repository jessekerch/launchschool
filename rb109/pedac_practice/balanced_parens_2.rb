=begin

# Write a method that takes a string and returns a boolean indicating if this string has a balanced set of parentheses.

Problem:
input: String
output: Boolean, true if balanced, false if not
rules:
input can be almost any character
important characters are parenthesis
need to balance (), [], {}
inputs always have some sort of parenthesis 

Example:
[](){} now => true
[ ], OK
(), OK
{}, OK

[(]) => false
[ ( => not OK

Data:
input: String
output: Boolean

Algo:
define method "balanced_parens?" to take one string obj parameter, "str"
make "opens" variable and set to empty array []
iterate index from 0 to str size - 1
  current = character at current index
    if it's an open paren (part of "{[(" )
      add it to the array of open parens
      
    if it's a close paren (part of ")]}" )
      if the last element in the array is the reverse version of current "(" => ")"
        remove the last item from the open parens array
      otherwise
        return false
        
return boolean, true or false
=> return if opens is empty or not, which will mean it was balanced

=end

PAIRS = { ")" => "(", "]" => "[", "}" => "{" }

def balanced_parens?(str)
  opens = []
  0.upto(str.size - 1) do |idx|
    char = str[idx]
    if "{[(".include?(char) # if it's an open paren
      opens << char
    elsif ")]}".include?(char) # if it's a close paren
      if PAIRS[char] == opens.last
        opens.pop
      else
        return false
      end
    end
  end
  opens.empty?
end

p balanced_parens?("()") == true
p balanced_parens?("puts(hello)") == true
p balanced_parens?("arr[0][0..2]") == true
p balanced_parens?("[](){} now") == true
p balanced_parens?("[(])") == false
p balanced_parens?("{[()]}") == true
p balanced_parens?("{[(}])") == false
p balanced_parens?(")(") == false
p balanced_parens?(")[](") == false
p balanced_parens?("()][") == false
p balanced_parens?("()}{()")  == false
