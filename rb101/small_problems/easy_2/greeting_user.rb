# Jesse Kercheval
# June 9, 2022

# Write a program that will ask for user's name.
# The program will then greet the user. If the user writes "name!" then the computer yells back to the user.

# Examples

# What is your name? Bob
# Hello Bob.

# What is your name? Bob!
# HELLO BOB. WHY ARE WE SCREAMING?

# Problem:
  # Input: String object, name
  # Output: String object, greeting
  # Domain: "yelling" requires all uppercase?
  # Implicit requirements: ? I don't think so...
  # Mental model: the program gets a string as input, the user's name.
    # It needs to check whether it has an ! on the end.
    # If it does, the output is in all caps plus the screaming comment.
    # If no !, then it just outputs Hello name.
    # Mostly I just need to check if the last character is an !

# Examples: input with ! will output in uppercase plus WHY ARE WE SCREAMING

# Data Structure: String objects and a Boolean expression if ! or no

# # Algorithm: 
# - ask the user for their name
#   - input new variable name
# - return True boolean if the name variable has an ! on the end
#   - I think the .include? method might work here but I need to check the docs
# - output the greeting based on the check above
#   - if True, output uppercase greeting and why are we screaming
#   - if False, output lowercase greeting

# # Coding:

puts "What is your name? "
name = gets.chomp.capitalize

if name.include?("!") 
  puts "HELLO #{name.chop.upcase}. WHY ARE WE SCREAMING?"
else 
  puts "Hello #{name}."
end  
