# Jesse Kercheval
# May 16, 2022
# RB100
# gotta remember the scope for variables 
# numbers are immutable, but strings are mutable
# local variables are not visible outside the methods (they will be to a block, lambda, etc tho)

a = 7
array = [1, 2, 3]

array.each do |element|
  a = element
end

puts a