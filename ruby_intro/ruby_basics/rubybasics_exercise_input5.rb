# Jesse Kercheval
# May 17, 2022
# RB100

n = nil

loop do
  puts ">> How many output lines do you want? Enter a number >= 3: "
  n = gets.chomp.to_i
  break if n == "stop"
  next if n < 3
  n.times { puts "It's a great day at Launch School!" }
end