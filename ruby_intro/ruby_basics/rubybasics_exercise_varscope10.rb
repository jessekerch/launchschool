# Jesse Kercheval
# May 16, 2022
# RB100
# gotta remember the scope for variables 
# the block is inside a method so it can't call variable a from outside

iterations = 1

loop do
  puts "Number of iterations = #{iterations}"
  iterations += 1
  break if iterations > 5
end