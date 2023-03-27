require 'benchmark'
=begin

Complete the function scramble(str1, str2) that returns true
if a portion of str1 characters can be rearranged to match str2,
otherwise returns false.

Notes:
  Only lower case letters will be used (a-z). No punctuation or digits will be included.
  Performance needs to be considered.

Examples:
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False

Problem:
input: string x 2
output: boolean
rules:
check if str2 can be built using str1 parts
inputs are all lowercase alpha characters
need to consider performance

Example:
'scriptjava', 'javascript'
scriptjava => ["s", "c", "r", "i", "p", "t", "j", "a", "v", "a"]


Data:
input: strings
output: boolean
interm: array? probably...

Algo:
define method to take two parameters, str1, str2
turn str1 and str2 into arrays of one character each
iterate through each character of the 

iterate from 0 to str2 size -1, assign "index"
  if str1 contains index position character ("c", "o", etc)
    delete that character from str1
  else
    return false

return true (unless false has already been returned explicitly)

=end

def scramble(str1, str2)
  hsh1 = {}
  hsh2 = {}
  
  str1.each_char do |char|
    if hsh1[char]
      hsh1[char] += 1
    else
      hsh1[char] = 1
    end
  end
  
  str2.each_char do |char|
    if hsh2[char]
      hsh2[char] += 1
    else
      hsh2[char] = 1
    end
  end

  hsh2.each do |k, v|
    if hsh1[k] && hsh1[k] >= v 
      next
    else
      return false
    end
  end
  
  true
end

p scramble('rkqodlw', 'world') == true
p scramble('cedewaraaossoqqyt', 'codewars') == true
p scramble('katas', 'steak') == false
p scramble('scriptjava', 'javascript') #== true
p scramble('scriptingjava', 'javascript') #== true