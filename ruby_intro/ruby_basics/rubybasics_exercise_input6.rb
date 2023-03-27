# Jesse Kercheval
# May 17, 2022
# RB100

username = "Jesse"
password = "SecreT"

loop do
  puts ">> Please enter your username: "
  name_input = gets.chomp
  break if name_input == username
  puts "Invalid username!"
  puts ""
end

loop do
  puts ">> Please enter your password: "
  pass_input = gets.chomp
  break if pass_input == password
  puts "Invalid password!"
  puts ""
end

puts ""
puts "Welcome!"

