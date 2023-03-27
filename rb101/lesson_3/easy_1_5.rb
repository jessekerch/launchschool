# Programmatically determine if 42 lies between 10 and 100.

# hint: Use Ruby's range object in your solution.

print "Please enter a number: "
number = gets.chomp.to_i

# for i in 10..100 do
#   if number == i 
#     puts "#{number} lies between 10 and 100!"
#   end
# end

if (10..100).include?(number)
  puts "#{number} lies between 10 and 100!"
else
  puts "#{number} does not lie between 10 and 100"
end

# LS said (10.100).cover?(42)
# .cover? is a new method for me, made a flashcard
