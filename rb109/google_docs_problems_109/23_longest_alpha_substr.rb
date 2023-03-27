=begin
23. Longest alphabetical substring
(https://www.codewars.com/kata/5a7f58c00025e917f30000f1)
6 kyu
Find the longest substring in alphabetical order.

Example: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".

There are tests with strings up to 10 000 characters long so your code will need to be efficient.

The input will only consist of lowercase characters and will be at least one letter long.

If there are multiple solutions, return the one that appears first.

Problem:
input: string
output: string
rules:
output longest possible string that goes in alphabetical order
if there are more than one, return first that appears
be efficient

Example:
asdfaaaabbbbcttavvfffffdf => aaaabbbbctt
as dfX aaaabbbbctt avX fffffX dfX

Data:
input: string
output: string

Algo:
define method to take one param, "str"
break string into array of characters
current_arr = first element of array popped off
long_arr = current_arr
iterate through array elements, assign to "char"
  if char ordinal value >= current_arr last elem ord value 
    add char to end of long_arr array
    if current_arr size > long_arr size, long_arr = current_arr 
  else 
    current_arr = [char] one element


return long_arr, joined together into string

=end

def longest(str)
  arr = str.chars
  current_arr = [arr.shift]
  long_arr = current_arr
  arr.each do |char|
    if char.ord >= current_arr.last.ord
      current_arr << char
      long_arr = current_arr if current_arr.size > long_arr.size
    else
      current_arr = [char]
    end
  end
  long_arr.join      
end

p longest('asd') == 'as'
p longest('nab') == 'ab'
p longest('abcdeapbcdef') == 'abcde'
p longest('asdfaaaabbbbcttavvfffffdf') == 'aaaabbbbctt'
p longest('asdfbyfgiklag') =='fgikl'
p longest('z') == 'z'
p longest('zyba') == 'z'
