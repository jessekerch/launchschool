# Jesse Kercheval
# May 17, 2022
# RB100

num = nil
denom = nil
answer = nil

def valid_number?(number_string)
  number_string.to_i.to_s == number_string
end

loop do
  puts ">> Please enter the numerator: "
  num = gets.chomp
  puts ">> Please enter the denominator: "
  denom = gets.chomp
  break if valid_number?(num) && valid_number?(denom)
  puts "Invalid input!"
  puts ""
end 

answer = num.to_i / denom.to_i

puts ""
puts "#{num} / #{denom} = #{answer}"