=begin

Longest Palindromic Substring 
Given a string s, return the longest palindromic substring in s.

A single character is not considered a palindromic substring.

rules:
look for palindrome substrings in the string
can be 2+ characters
input is lowercase alphabet or numbers

Example 1:
babad => bab aba

Data:
input: string
output: string

Algo:
define method to take 1 parameter
make "longest" variable set to ""
iterate "long" from 2 to input string size
  iterate "index" from 0 to string size - long
    check if substring (string from index, n chars long) is palindrome
    => helper method to check palindrome?
      if string size is odd
        check substr from 0 to size / 2 - 1
        equals substr from size / 2 to array size - 1
      if string size is even
        check substr from 0 to size / 2 - 1
        equals substr from size / 2 + 1 to array size - 1

    if it's a palindrome
      if current is longer than longest, longest = current
      
return longest string

=end

def palindrome?(substr)
  if substr.size.even?
    return substr[0..((substr.size / 2) - 1)] == substr[(substr.size / 2)..-1].reverse
  else
    return substr[0..((substr.size / 2) - 1)] == substr[((substr.size / 2) + 1)..-1].reverse
  end
end

def longest_palindrome(str)
  longest = ""
  2.upto(str.size) do |long|
    0.upto(str.size - long) do |idx|
      if palindrome?(str[idx, long])
        longest = str[idx, long] if str[idx, long].size > longest.size
      end
    end
  end
  longest
end

p longest_palindrome("babad") == "bab"
p longest_palindrome("cbbd") == "bb"
p longest_palindrome("abcd") == ""
p longest_palindrome("aa") == "aa"
p longest_palindrome("12231221") == "1221"
