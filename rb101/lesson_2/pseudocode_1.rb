# a method that returns the sum of two integers?

# SET number1 = an integer
# SET number2 = another integer
# SET sum = the sum of the two integers
# PRINT sum

puts "What is the first number?"
number1 = gets.chomp.to_i

puts "What is the second number?"
number2 = gets.chomp.to_i

sum = number1 + number2
puts "The sum of your numbers is #{sum}."

