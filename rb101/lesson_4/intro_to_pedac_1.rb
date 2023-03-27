# PROBLEM:

# Given a string, write a method `palindrome_substrings` which returns
# all the substrings from a given string which are palindromes. Consider
# palindrome words case sensitive.

# Test cases:

# palindrome_substrings("supercalifragilisticexpialidocious") == ["ili"]
# palindrome_substrings("abcddcbA") == ["bcddcb", "cddc", "dd"]
# palindrome_substrings("palindrome") == []
# palindrome_substrings("") == []

# input: string
# output: array of substrings (string objects as elements)
# rules:
#      Explicit requirements:
#        - every substring of the string which is a palindrome must be
#          converted to uppercase.
#        - Palindromes are case sensitive

#      Implicit requirements:
#        - returned array substrings should be separate elements, not joined
#        - if no palindromic substring is found, an empty array should be
#          returned
#        - if the string is an empty string, the result should be an empty
#          array