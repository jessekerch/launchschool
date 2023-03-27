# Jesse Kercheval
# May 17, 2022
# RB100

puts ">> Type your age in years: "
age = gets.to_i
if age > 0
  puts "Your age in months is #{age * 12}"
else
  puts "That's not a number greater than zero!"
end 
