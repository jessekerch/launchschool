# Write a method that takes a sentence string as input,
# and returns the same string with any sequence of the words
# 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
# converted to a string of digits.

# Example:

# word_to_digit('Please call me at five five five one two three four. Thanks.')
# == 'Please call me at 5 5 5 1 2 3 4. Thanks.'

# Problem:
# - Input: string, a sentence
# - Output: string, the same sentence but converted
# - Rules: output sentence should have number words converted to digits

# Examples/Rules:
# # 'Please call me at five five five one two three four. Thanks.'
# # == 'Please call me at 5 5 5 1 2 3 4. Thanks.'
# Please > Please
# call > call
# me ...
# five > 5
# five > 5

# Data Structures:
# - input structure: string
# - output structure: string
# - intermediate steps? hash to hold words numbers as keys and digits values 

# Algorithm
# - define a method "word_to_digit", to take one argument "sentence"
# - split sentence into an array of string elements
# - iterate through string elements, checking each word
#   - if the word is included in the NUMBERS hash, change it to a digit
# - join the array back together into a string, separated by spaces 
# - return sentence, modified of course

# Code

NUM = {"one" => "1", "two" => "2", "three" => "3", "four" => "4",
          "five" => "5", "six" => "6", "seven" => "7", "eight" => "8",
          "nine" => "9", "ten" => "10" }

def word_to_digit(str)
  NUM.each do |word, digit|
    str.gsub!(/\b#{word}\b/, digit)
  end
  str
end

p word_to_digit('Please call my freight truck at five five five one two three four. Thanks.') #== 'Please call me at 5 5 5 1 2 3 4. Thanks.'