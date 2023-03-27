# Problem:
# input: string 
# output: string
# rules:
#   - every uppercase letter replaced by lowercase and vice versa
#   - all other characters should be unchanged

# Examples: 
#   - CamelCase => cAMELcASE
#     - C => is included in A..Z so downcase it
#     - a => is included in a..z so upcase it 
#     - etc.

# Data Structure:
# - string variable for input, str
# - array for intermediate to hold substrings/characters, chars
# - string variable for output, swap_str

# Algorithm:
# - define a method which will swapcase of any upper or lowercase letters
#   - break string variable input, str, into an array, chars,
#     with each element as a character
#   - check each character whether it is uppercase or lowercase
#   - change/swap each character to lowercase or uppercase, depending
#   - join array elements together into a new string, swap_str
# - return string variable swap_str at end of method

LOWER = ('a'..'z')
UPPER = ('A'..'Z')

def swapcase(str)
  chars = str.chars
  swap_str = []
  chars.map do |char|
    if UPPER.include?(char)
      swap_str << char.downcase
    elsif LOWER.include?(char)
      swap_str << char.upcase
    else
      swap_str << char
    end
  end
  swap_str.join
end

p swapcase('CamelCase') #== 'cAMELcASE'
p swapcase('Tonight on XYZ-TV') #== 'tONIGHT ON xyz-tv'

