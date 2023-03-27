=begin

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.


A subsequence of a string is a new string that is formed from the original
string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false
examples:


Problem:
input: two string objects
output: boolean, true if subsequence or else false
rules:
subsequence means a string is a substring in the same order when compared
ace is a subsequence of abcde
can be nothing, so ace is a subsequence of ace

Examples:
s = "abc"
t = "ahbgdc"
no.... abc --> [a, b, c]
remove everything from t that's not abc
then see if they are equal

ahbgdc -> abc
abc == abc so we're true

Data:
input: string x 2
output: boolean
(might use a boolean object or might just return the truthiness of .include? or t == s)
interm: array object to hold single characters, bytes of the strings

Steps:
change s to an array, ["a", "b", "c"]

=end

def is_subsequence(s, t)
  
end

is_subsequence("aabb", "aabb") == true
is_subsequence("aaa", "abacba") == true
is_subsequence("bbb" "abcde") == false
is_subsequence("axcd", "abxcd") == true
is_subsequence("axc","ahbgdc" ) == false
is_usbsequence("abc","ahbgdc" ) == true=end
p is_subsequence("abc","ahbgdc" ) == true
p is_subsequence('abc', 'aabbcc') #== true
p is_subsequence('aec', 'abcde') == false
