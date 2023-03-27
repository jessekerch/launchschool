=begin
"write a method to determine if a word is a palindrome, without using the reverse method", etc. 

Problem:
input: string object
output: boolean

Example:
"umma" -> size = 4, 4/2 = 2 which is the index after the middle.
so left index to start checking is 4/2 - 1 => 1
right index is 4/2 for even

"racecar" -> size = 7, 7/2 = 3 which is the middle index 
so left index to start checking is 7/2 - 1 => 2
right index is 7/2 + 1 for odd


Data:
input: string
output: boolean
intermediate? array? probably not..

Steps:
define a method to check for palindrome
left index is equals string size / 2 - 1
if size is odd, left index is string size / 2 + 1, otherwise size / 2
repeat while left index is >= 0  (need to check 0 index)
  if string left index and string right index !=, return false
  subtract 1 from left index
  add 1 to right index
repeat
return true, at the end unless false has already been explicitly returned

=end

def palindrome_check(str)
  left_idx = (str.size / 2) - 1
  str.size.odd? ? right_idx = (str.size / 2) + 1 : right_idx = str.size / 2
  while left_idx >= 0
    return false if str[left_idx] != str[right_idx]
    left_idx -= 1
    right_idx += 1
  end
  true
end

p palindrome_check("umma") == false
p palindrome_check("ellie") == false
p palindrome_check("hannah") == true
p palindrome_check("racecar") == true
p palindrome_check("kayak") == true
p palindrome_check("panama") == false
