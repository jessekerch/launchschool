# Jesse Kercheval
# May 18, 2022
# RB100 Ruby Basics exercises

loop do
  puts 'What does 2 + 2 equal?'
  answer = gets.chomp.to_i
  unless answer == 4
    puts "Wrong answer, try again!"
  else 
    puts "That's correct!"
    break
  end
end

