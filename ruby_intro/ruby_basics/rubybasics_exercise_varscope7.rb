# Jesse Kercheval
# May 16, 2022
# RB100
# gotta remember the scope for variables 
# the block can use and modify local variables that are defined outside the block

a = 7
array = [1, 2, 3]

array.each do |element|
  a = element
end

puts a