# Jesse Kercheval
# May 17, 2022
# RB100

count = 1

for count in 1..5
  puts count.odd? ? "#{count} is odd" : "#{count} is even"
  count += 1
end

