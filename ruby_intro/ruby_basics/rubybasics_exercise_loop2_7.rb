# Jesse Kercheval
# May 18, 2022
# RB100 Ruby Basics exercises

number_a = 0
number_b = 0
count = 0

loop do
  count += 1
  number_a += rand(2)
  number_b += rand(2)
  break if number_a == 5 || number_b == 5
end

puts "5 was reached after #{count} loops!"
