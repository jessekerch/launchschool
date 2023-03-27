# Problem: Tri-angles. Specify type of triangle.
# input: 3 numbers (all integers)
# output: symbol, representing type of triangle
# rules:
#   right One angle of the triangle is a right angle (90 degrees)
#   acute All 3 angles of the triangle are less than 90 degrees
#   obtuse One angle is greater than 90 degrees.
#   :invalid: sum of angles = 180. No angles <= 0
  
# Examples: 
# 60, 70, 50 = 180, none less than 0, all less than 90. :acute
# 30, 90, 60 = 180, none less than 0, one is 90degrees. right.

# Data structures:
# input: integer x 3
# output: symbol
# intermediate: Array to hold three inputs


def triangle(ang_1, ang_2, ang_3)
  angles = [ang_1, ang_2, ang_3].sort
  case
  when angles.sum != 180, angles.include?(0)
    :invalid
  when angles[-1] > 90
    :obtuse
  when angles.max < 90
    :acute
  when angles.include?(90)
    :right
  end
end

p triangle(60, 70, 50) == :acute
p triangle(30, 90, 60) == :right
p triangle(120, 50, 10) == :obtuse
p triangle(0, 90, 90) == :invalid
p triangle(50, 50, 50) == :invalid
