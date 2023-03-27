# Lettercase Counter

# Write a method that takes a string, and then returns a hash that contains 3 entries: one represents the number of characters in the string that are lowercase letters, one the number of characters that are uppercase letters, and one the number of characters that are neither.

# Examples

# letter_case_count('abCdef 123') == { lowercase: 5, uppercase: 1, neither: 4 }
# letter_case_count('AbCd +Ef') == { lowercase: 3, uppercase: 3, neither: 2 }
# letter_case_count('123') == { lowercase: 0, uppercase: 0, neither: 3 }
# letter_case_count('') == { lowercase: 0, uppercase: 0, neither: 0 }

# Problem
# input: string
# output: hash, containing three entries
# rules:
# - input string contains lowercase, uppercase, and other characters
# - input may contain nothing
# - output should have 3 entries
#   - first entry is number of lowercase characters
#   - second is uppercase character count
#   - third is anything else 
#   - if there aren't any of these it should return a 0 count
#   - hash keys should be symbols

#   Scratchpad:
#   Default the hash to 0 with Hash.new(0)

# Examples:
# letter_case_count('abCdef 123') == { lowercase: 5, uppercase: 1, neither: 4 }
# input is 'abCdef 123'
# lowercase characters are 'abdef'
# - count is 5, each time a lowercase character is encountered, adding 1 to the lowercase count
# uppercase characters are 'C'
# - count is 1, each time a uppercase character is encountered, adding 1 to the uppercase count
# other will be ' 123'
# - count is 4, each time a character is encountered which is neither, adding 1 to the neither count

# letter_case_count('') == { lowercase: 0, uppercase: 0, neither: 0 }

# Data Structures:
# String input
# Hash output, defaulted to 0, called hash
# Integer variable for index to iterate across substrings
# Regex ranges /[a-z]/, /[A-Z]/

# Algorithm:
# Define a method called letter_case_count which takes one argument, a string called str
# Initialize a hash called hash with default of 0
#   - hash should have three symbols as keys lowercase, uppercase, and neither, all set to 0
# Create a for loop with an iterator index range from 0 to (not incl.) the length of the string
#   - Initialize a new string variable called char
#   - Assign char to the current index of str at variable i
#   - Use if statement to qualify if char matches a range either lowercase, uppercase, or neither
#     - add one to each entry value depending on the match
# Return hash at end of method

def letter_case_count(str)
  hash = { lowercase: 0, uppercase: 0, neither: 0 }
  for i in 0...str.length do
    char = str[i]
    if char.match?(/[a-z]/)
      hash[:lowercase] += 1
    elsif char.match?(/[A-Z]/)
      hash[:uppercase] += 1
    else
      hash[:neither] += 1
    end
  end
  hash
end

p letter_case_count('abCdef 123') == { lowercase: 5, uppercase: 1, neither: 4 }
p letter_case_count('AbCd +Ef') == { lowercase: 3, uppercase: 3, neither: 2 }
p letter_case_count('123') == { lowercase: 0, uppercase: 0, neither: 3 }
p letter_case_count('') == { lowercase: 0, uppercase: 0, neither: 0 }