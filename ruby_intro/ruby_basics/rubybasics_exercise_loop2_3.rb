# Jesse Kercheval
# May 18, 2022
# RB100 Ruby Basics exercises

process_the_loop = [true, false].sample

if process_the_loop == true
  loop do
    puts "The loop was processed (true)"
    break 
  end 
else
  puts "The loop was not processed (false)"
end 

