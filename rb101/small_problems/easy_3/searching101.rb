# Write a program that solicits 6 numbers from the user, then prints a message that describes whether
# or not the 6th number appears amongst the first 5 numbers.

def get_user_number(round)
  order = ['1st', '2nd', '3rd', '4th', '5th', 'last']
  print "Enter the #{order[round]} number please: "
  number = gets.chomp.to_i
end

index = 0
array = []

6.times do
  array[index] = get_user_number(index)
  index += 1
end

if array[0..4].include?(array[5])
  puts "The number #{array[5]} appears in #{array[0..4]}"
else
  puts "The number #{array[5]} does not appear in #{array[0..4]}"
end

