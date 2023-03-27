# June 9, 2022
# Build a program that displays when the user will retire and how many years she has to work till retirement.

require 'date'

puts "What is your age? "
age = gets.to_i

puts "At what age would you like to retire? "
retire_age = gets.to_i

current_year = Date.today.year
retire_year = retire_age - age + current_year

puts "It's #{current_year}. You will retire in #{retire_year}."
puts "You have only #{retire_year - current_year} years of work to go!"
