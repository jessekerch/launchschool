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
define method "balanced_parens" to take one param "str"
remove all characters from str except for ()[]{}
set opens to 0
make hash of WINS = { "(" => "[{()", ")" => "()]}", "[" => "({[]", "]" => "[]})", "{" => "[({}", "}" => "{}])" }
iterate "index" from 0 up to str size - 1
  set current = str[index]
  set next = str[index + 1]
  if WINS[current].include?(next)
   if current is in "{[(", add + 1 to opens
   if current is in "}])", - 1 from opens
  else
    return false
    
  "opens" == 0 => return true or false
=end

# OPEN = ["(", "[", "{"]
# CLOSE = [")", "]" "}" ]

# def balanced_parens?(str)
  # str = str.chars.select {|c| "()[]{}".include?(c) }.join
  # open_count = 0
  # 0.upto(str.size - 2) do |idx|
  #   char = str[idx]
  #   next_char = str[idx + 1]
  #   return false if OPEN.include?(char) &! OPEN.include?(next_char) || next_char == char.reverse
  #   if OPEN.include?(char)
  #     open_count += 1
  #   elsif CLOSE.include?(char)
  #     open_count -= 1
  #   end
  # end
  # if OPEN.include?(str[-1])
  #   open_count += 1
  # elsif CLOSE.include?(str[-1])
  #   open_count -= 1
  # end
  # open_count == 0
  
PASS = { "(" => "[{()", "[" => "({[]", "{" => "[({}", ")" => "{[()]}", "]" => "({[]})", "}" => "([{}])" }

def balanced_parens?(str)
  str.gsub!(/[^()\[\]{}]/, "")

  open_count = 0

  0.upto(str.size - 1) do |idx|
    char = str[idx]
    next_char = str[idx + 1]
    return false unless next_char == nil || PASS[char].include?(next_char)
    "([{".include?(char) ? open_count += 1 : open_count -= 1
  end

  open_count == 0
end


p balanced_parens?("()") == true
p balanced_parens?("puts(hello)") == true
p balanced_parens?("arr[0][0..2]") == true
p balanced_parens?("[](){} now") == true
p balanced_parens?("[(])") == false
p balanced_parens?("{[()]}") == true
p balanced_parens?("{[(}])") == false