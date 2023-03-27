# Given a string that consists of some words (all lowercased)
# and an assortment of non-alphabetic characters, write a method that returns
# that string with all of the non-alphabetic characters replaced by spaces.
# If one or more non-alphabetic characters occur in a row, you should only have
# one space in the result (the result should never have consecutive spaces).

# Problem:
# - Input: String object
# - Output: String object
# - Rules:
#   - Input will contain some words, all lowercase, and non-alphabetic chars
#   - Output should have a space " " in place of any non-alphabetic chars
#   - One or more non-alphbtc chars should be replaced by only one space " "

# Examples:
# cleanup("---what's my +*& line?") == ' what s my line '

# Data Structure:
# String objects for input and output
# String objects are collections so I shouldn't need anything intermediate

# Algorithm
# Use .gsub to substitute any non-alphabetic character with a space
# I don't know what will happen with mulitiple characters in a row, need to test

# Scratchpad
# Regex \W represents the range of anything not 0-9a-zA-Z


def cleanup(string)
  string.gsub(/\W+/, " ")
end

p cleanup("---what's my +*& line?") # == ' what s my line '

# LS uses the following:
# def cleanup(text)
#   text.gsub(/[^a-z]/, ' ').squeeze(' ')
# end
# .squeeze is a new method for me so I looked it up