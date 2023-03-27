# Write a program that will ask a user for an input of a word or multiple words
# and give back the number of characters
# Spaces should not be counted as a character.

# Problem:
#   input: a String object including one or more words, whitespaces, etc
#   output: an Integer object, a string listing total chars count
#   rules: don't count white spaces as characters
# Examples:
#   Please write word or multiple words: walk
#   There are 4 characters in "walk".
#   Please write word or multiple words: walk, don't run
#   There are 13 characters in "walk, don't run".
# Data Structure:
#   String object input, Integer output
#   Array could be used to split up the characters in the string
# Algorithm:
# -- get a string from the user
#   -- assign the string to a variable
# -- convert string to array and remove whitespaces 
# -- iterate over array and keep count of characters
#   -- delete the whitespaces
#   -- count the characters left 
#   -- keep a variable called count so you can interpolate for the output
# -- return total count 
# Coding:

print "Please write a word or multiple words: "
string = gets.chomp
count = string.delete(" ").chars.count

puts "There are #{count} characters in '#{string}'."