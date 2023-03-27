# Print all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

# My initial solution:
# number = 0
# 99.times do
#   number += 1
#   puts number if number.odd?
# end

# Next solution trying Integer#upto
# 1.upto(99) {|i| puts i if i.odd? } 

# Next solution trying Array#select
puts [*(1..99)].select {|i| i.odd?}