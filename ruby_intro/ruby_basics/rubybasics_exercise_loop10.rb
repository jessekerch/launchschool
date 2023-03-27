# Jesse Kercheval
# May 16, 2022
# RB100
# I didn’t know you could for loop over an array like this didn’t even declare friend as a variable ahead of time. Neat.
# I had used for i in 1..friends.size and then friends.pop, which worked but backwards hah

friends = ['Sarah', 'John', 'Hannah', 'Dave']

for friend in friends
  puts "Hello #{friend}!"
end