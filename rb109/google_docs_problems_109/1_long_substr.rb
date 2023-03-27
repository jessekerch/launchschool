=begin

Given a string str, find the length of the longest substring without repeating characters.

Problem:
input: string of characters
output: integer, number of consecutive non-repeating characters
rules:
input can be blank
otherwise input all lowercase alphabet

Examples:
aaaabbcba => 3
a, a, no, a, no, a, b, 2, b, no, c, b, 2, a, 3

prev = b
current = a
count = 3
longest = 3

Data:
input: string
output: integer

Algo:
define method to take one parameter, str
make variable count and set to 1
make variable longest and set to 1
make variable previous and set to index 0 character of array
iterate index from 1 up to array size - 1
  for each index element 
    if current element is different from previous
      count + 1
      if count > longest, longest = count
      previous = current
    else
      count = 0
      previous = current
    end if
end each character loop
end 

return longest of non-repeating characters

=end

def length_of_longest_substring(str)
  
  if str[0]
    previous = str[0]
    count = 1
    longest = 1
  else 
    return ''
  end
  
  1.upto(str.size - 1) do |idx|
    longest = count if count >= longest
    if str[idx] != previous
      previous = str[idx]
      count += 1
    else
      previous = str[idx]
      count = 1
    end
  end
  longest
end

p length_of_longest_substring('aaaabbcba') == 3
p length_of_longest_substring('aaaaaa') == 1
p length_of_longest_substring('pwwkea') == 3
p length_of_longest_substring('') == ''
p length_of_longest_substring('a') == 1
p length_of_longest_substring('robtuunop') == 5
p length_of_longest_substring('tucccaassaa') == 3
