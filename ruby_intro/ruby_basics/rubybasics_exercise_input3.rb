# Jesse Kercheval
# May 17, 2022
# RB100

answer = ""

loop do
  puts ">> Do you want me to print something? (y/n) "
  answer = gets.chomp.downcase
  break if answer == "y" || answer == "n"
  puts ">> I need a y or n please. "
end

if answer == "y"
  puts "Something! "
else
  puts "   "
end 

