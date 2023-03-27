=begin

Given a string s, return the longest palindromic substring in s.

A single character is not considered a palindromic substring.


Problem:
input: string object "s"
output: string object, longest palindrome
rules:
output must be a palidrome (symmetrical)
output must be more than one character
output must be continguous
input lowercase letters or numbers, but always a string
no spaces

Data:
input: string
output: string
interm: array of strings

Steps:
gather all possible strings
iterate from 0 up to string.size - 2 with parameter "left_idx"
  iterate from 1 up to string.size - 1 with parameter "right_idx"
    add substring from left_idx to right_idx to "strings" array
keep only unique substrings from "strings" array

check for palindromes
palindromes = empty array []
iterate through each substring of "strings" array
for each substr:
  set symmetrical to true
  set middle index mid_idx = string size / 2
  set left_idx = mid_idx - 1
  set right_idx = mid_idx * -1
  while right_idx <= substr size - 1 loop
    if substr left_idx does not equal right_idx
      symmetrical = false and break
    right_idx + 1 on each iteration
    left_idx - 1 on each iteration
  add substr to palindromes if symmetrical = true
return palindromes array

return longest palindromic substring

=end

def palindromes(array)
  palindromes = []
  array.each do |str|
    symmetrical = true
    left_idx = (str.size / 2) - 1
    right_idx = (str.size / 2) * -1
    while right_idx <= str.size - 1 do
      if str[left_idx] != str[right_idx]
        symmetrical = false
      end
      right_idx += 1
      left_idx -= 1
    end
    if symmetrical
      palindromes << str
    end
  end
  palindromes
end

def longest_palindrome(s)
  strings = []
  0.upto(s.size - 2) do |left_idx|
    left_idx.upto(s.size - 1) do |right_idx|
      substr = s[left_idx..right_idx]
      strings << substr if substr.size > 1 
    end
  end
  
  longest = ""
  palindromes(strings.uniq).each do |str|
    longest = str if str.size > longest.size
  end
  longest
end

p longest_palindrome("babad") == "bab"
p longest_palindrome("cbbd") == "bb"
p longest_palindrome("abcd") == ""
p longest_palindrome("aa") == "aa"
p longest_palindrome("12231221") == "1221"

