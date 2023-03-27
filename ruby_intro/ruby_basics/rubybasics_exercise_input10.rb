# Jesse Kercheval
# May 17, 2022
# RB100

num1 = nil
num2 = nil
answer = nil

def valid_number?(number_string)
  number_string.to_i.to_s == number_string && number_string.to_i != 0
end

loop do
  puts ">> Please enter a positive or negative number: "
  num1 = gets.chomp
  puts ">> Please enter a positive or negative number: "
  num2 = gets.chomp
  break if valid_number?(num1) && valid_number?(num2)
  break if (num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0)
  puts "Invalid input!"
  puts ""
end 

answer = num1.to_i + num2.to_i

puts ""
puts "#{num1} + #{num2} = #{answer}"
