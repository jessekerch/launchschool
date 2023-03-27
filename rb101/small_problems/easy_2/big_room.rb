# Build a program that asks a user for the length and width of a room in meters and
# then displays the area of the room in both square meters and square feet.

# Note: 1 square meter == 10.7639 square feet

# Do not worry about validating the input at this time.

# Example Run

# Enter the length of the room in meters:
# 10
# Enter the width of the room in meters:
# 7
# The area of the room is 70.0 square meters (753.47 square feet).

# PEDAC
# Problem:
# - Input: Integer object for length and Integer object for Width
# - Output: Integer object in sq.m and Integer object in sq.ft
# - Rules:
#   - Explicit:
#     - method takes two arguments, both positive integers
#     - method returns an Integer object in sq.m
#   - Implicit:
#     - Also output the Integer object in sq.ft
#
# Example:
#  - Test Case 1:
#   - Input: [10, 7] 
#   - Output: 70 and 753.47
#     - 10 * 7, and then * 10.7639
#
# Data Structures:
#  - use Integers for everything

# Algorithm and Code:
#  - create a method named area
#  - takes two arguments, both Integer objects

puts "Enter the length of the room in meters: "
length = gets.to_f

puts "Enter the width of the room in meters: "
width = gets.to_f

area_m = length.to_f * width.to_f
area_f = area_m * 10.7639

puts "The area of the room is #{area_m.round(2)} square meters " + \
     "(#{area_f.round(2)} sq.ft)"