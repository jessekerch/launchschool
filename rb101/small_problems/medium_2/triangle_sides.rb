# Problem: Write a method that takes the lengths of the
# 3 sides of a triangle as arguments, and returns a symbol
# :equilateral, :isosceles, :scalene, or :invalid depending
# on whether the triangle is equilateral, isosceles, scalene, or invalid.


# - Input: 3 numbers (integer or float), lengths of triangle sides
# - Output: symbol object, :isosceles, :scalene, or :invalid
# - Rules: 
  # always 3 sides for input
  # side can be 0
  # side can be a float (e.g. 1.5)
  # equilateral All 3 sides are of equal length
  # isosceles 2 sides are of equal length, while the 3rd is different
  # scalene All 3 sides are of different length
  # invalid if sum of two shortest sides <= longest side OR any sides <= 0

# Examples/Rules:
# triangle(3, 3, 3) == :equilateral
# triangle(3, 3, 1.5) == :isosceles
# triangle(3, 4, 5) == :scalene
# triangle(0, 3, 3) == :invalid
# triangle(3, 1, 1) == :invalid

# Data Structures:
# - input structure: integers or floats
# - output structure: symbol
# - intermediate steps? put the input numbers into an array "sides", for sorting

# Algorithm
# Define method "triangle", which takes 3 input parameters, numbers
# - keep sides in array "sides", and get longest and other sides
#   - sort array sides
#   - last element assigned to variable "longest"
#   - sum of other two elements assigned to variable "others"
# - Return :equilateral if all sides are equal
#   - if first element is equal to second element is equal to third element
#   - return :equilateral
# - Return :invalid for invalid if any elements are 0
#   - iterate through sides array and return :invalid if any sides are 0
# - If longest side is less than sum of other sides, return :invalid
# - If the count of any sides is 2, return :isosceles
#   - if sides array indexes 0, 1, or 2 have a count of 2 in the array
# - ELSE return :scalene

# Code

def triangle(side1, side2, side3)
  sides = [side1, side2, side3].sort
  return :equilateral if sides.uniq.count <= 1
  sides.each { |side| return :invalid if side <= 0 }
  longest = sides[-1]
  others = sides[0, 2].sum
  return :invalid if others <= longest
  sides.each { |side| return :isosceles if sides.count(side) == 2 }
  :scalene
end

p triangle(3, 3, 3) == :equilateral
p triangle(3, 3, 1.5) == :isosceles
p triangle(3, 4, 5) == :scalene
p triangle(0, 3, 3) == :invalid
p triangle(3, 1, 1) == :invalid