# Jesse Kercheval
# May 17, 2022
# RB100

pos = nil
neg = nil

def valid_number?(number_string)
  number_string.to_i.to_s == number_string && number_string.to_i != 0
end

loop do
  puts ">> Enter a positive or negative integer"

  n = gets.chomp.downcase
  break if n == "q"

  n = n.to_i
  unless n < 3
    n.times { puts "It's a great day at Launch School!" }
  else
    puts "At least 3 please."
  end

  puts ""

end

puts "Thanks for playing!"
