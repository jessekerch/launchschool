# Jesse Kercheval
# May 18, 2022
# RB100 Ruby Basics exercises

numbers = []

while numbers.length < 5
  puts 'Enter any number: '
  input = gets.chomp.to_i
  numbers << input
end

print numbers

