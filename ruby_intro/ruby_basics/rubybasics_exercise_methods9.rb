# Jesse Kercheval
# May 18, 2022
# RB100 Ruby Basics exercises

def add(one, two)
  one + two
end 

def multiply(one, two)
  one * two  
end

puts add(2, 2) == 4
puts add(5, 4) == 9
puts multiply(add(2, 2), add(5, 4)) == 36
