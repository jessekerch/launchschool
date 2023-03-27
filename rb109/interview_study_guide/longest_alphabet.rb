=begin

# Find the longest substring in alphabetical order.
# Example: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".
# The input will only consist of lowercase characters and will be at least one letter long.
# If there are multiple solutions, return the one that appears first.

Problem:
input: string
output: string
rules: 
input is all lowercase alpha
first encountered if there are more than one equal

Example:

Algo:
define method to take one string parameter "str"
break string into array of characters
run = array shifted off first element
longest = run 1st element
while array size > 0 do a loop
  letter = array shifted off first element
  if letter value >= run last character value  ** use the ord method
    add letter to run array
    if run is longer than longest, longest = run
  else
    run = letter

reverse the longest again and join
return => longest as string

=end

def longest(str)
  array = str.chars
  run = [array.shift]
  longest = run
  while array.size > 0 do
    letter = array.shift
    if letter.ord >= run.last.ord
      run << letter
      longest = run if run.size > longest.size
    else
      run = [letter]
    end
  end
  longest.join
end


p longest('asd') == 'as'
p longest('nab') == 'ab'
p longest('abcdeapbcdef') ==  'abcde'
p longest('asdfaaaabbbbcttavvfffffdf') == 'aaaabbbbctt'
p longest('asdfbyfgiklag') == 'fgikl'
p longest('z') == 'z'
p longest('zyba') == 'z'