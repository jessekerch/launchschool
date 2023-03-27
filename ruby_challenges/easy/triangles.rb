=begin
Problem
input: triangle object with 3 sides of lengths x, y, z
output: equilateral, isosceles, scalene depending on lengths of x y z
rules: 
  triangle is illegal if any sides are 0 or less
  triangle is illegal if longest side is <= sum of other two sides

Example
Triangle.new(4, 4, 4) == "equilateral"
Triangle.new(5, 5, 2) == "isosceles"
Triangle.new(3, 4, 5) == "scalene"

Data
input: Triangle object
  3 x Integer objects for @side1, @side2, @side3
output: String object
interm:? 

Algo
create a new Triangle class
new Triangle objects will have 3 sides: x, y, z

create getter and setter methods for the sides

create a method "triangle_type" which will return equilateral, isosceles, or scalene
  create a new array with 3 side counts (count of each side in the sides)
  if count of any sides is 3, output equilateral
  if count of any sides is 2, output isosceles
  if count of all sides is 1, output scalene
  

Code

=end

class Triangle
  attr_reader :sides, :kind
  
  def initialize(side1, side2, side3)
    @sides = [side1, side2, side3]
    @kind = triangle_type
  end
  
  def sides_are_illegal
    sorted_sides = sides.sort
    longest = sorted_sides.last
    return true if sides.any?{|n| n <= 0 }
    return true if longest >= sorted_sides[0..1].sum
    false
  end

  def to_s
    kind == "scalene" ? art = "A" : art = "An"
    "#{art} #{kind} triangle with sides #{side1}, #{side2}, and #{side3}."
  end
  
  def triangle_type
    raise ArgumentError, "Invalid triangle sides" if sides_are_illegal

    counts = sides.map {|s| sides.count(s)}
    case
    when counts.include?(3) then "equilateral"
    when counts.include?(2) then "isosceles"
    when counts.all?(1) then "scalene"
    end
  end
end

# first = Triangle.new(4, 4, 4) #== "equilateral"
# second = Triangle.new(5, 5, 2) #== "isosceles"
# third = Triangle.new(3, 4, 5) #== "scalene"
fourth = Triangle.new(2, 2, -1) #== "illegal"


# puts first
# puts second
# puts third
