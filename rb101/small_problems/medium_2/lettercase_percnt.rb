# Problem:
# - Input: string
# - Output: hash
# - Rules: hash has three entities: 1: % of lowercase, 2: % uppercase, 3: % other
#   - % is equal to lowercase / total chars * 100
#   - spaces count as neither, as do numbers
#   - 

# Examples/Rules:


# Data Structures:
# - input structure:
# - output structure:
# - intermediate steps?

# Algorithm
# - define a method letter_percentages which takes one string argument
# - determine total qty of characters in string
# - determine qty of lowercase characters in string
# - determine qty of uppercase characters in string
# - return hash

# Code

UPPERCASE = ("A".."Z")
LOWERCASE = ("a".."z")

def letter_percentages(string)
  hash = {}
  total_chars = string.chars.size.to_f
  low_chars = 0.0
  up_chars = 0.0

  string.chars.each do |char| 
    if LOWERCASE.include?(char)
      low_chars += 1
    elsif UPPERCASE.include?(char)
      up_chars += 1
    end
  end
  
  neither_chars = (total_chars - low_chars - up_chars).to_f

  hash[:lowercase] = (low_chars / total_chars * 100).round(1)
  hash[:uppercase] = (up_chars / total_chars * 100).round(1)
  hash[:neither] = (neither_chars / total_chars * 100).round(1)
  hash
end

p letter_percentages('abCdef 123') == { lowercase: 50.0, uppercase: 10.0, neither: 40.0 }
p letter_percentages('AbCd +Ef') == { lowercase: 37.5, uppercase: 37.5, neither: 25.0 }
p letter_percentages('123') == { lowercase: 0.0, uppercase: 0.0, neither: 100.0 }