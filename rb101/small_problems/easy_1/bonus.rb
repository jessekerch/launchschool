# What's my Bonus?
# Write a method that takes two arguments, a positive integer and a boolean,
# and calculates the bonus for a given salary. If the boolean is true,
# the bonus should be half of the salary. If the boolean is false, the bonus should be 0.

# Examples:
# puts calculate_bonus(2800, true) == 1400
# puts calculate_bonus(1000, false) == 0
# puts calculate_bonus(50000, true) == 25000

# PEDAC
# Problem:
# - Input: Integer object and Boolean object  # USE .class to check if this is an object??
# - Output: Integer object
# - Rules:
#   - Explicit:
#     - method takes two arguments 
#       - positive Integer
#       - Boolean expression, either true or false
#     - method returns an Integer object, bonus
#       - if true, the value is equal to salary / 2
#       - if false, the value is equal to 0
#   - Implicit:
#     - Salary is > 0 in all of the examples, so no divide by zero
#
# Example:
#  - Test Case 1:
#   - Input: [2800, true] 
#   - Output: 1400
#     - 2800 / 2 -> 1400 
#
# Data Structures:
#  
# Algorithm and Code:
# create a method named calculate_bonus
# takes two arguments, an Integer Object and a Boolean expression (TrueClass or FalseClass)

def calculate_bonus(salary, approval)
  approval ? salary / 2 : 0
end 

# Examples:
puts calculate_bonus(2800, true) == 1400
puts calculate_bonus(1000, false) == 0
puts calculate_bonus(50000, true) == 25000