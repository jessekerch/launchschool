# Jesse Kercheval
# May 18, 2022
# RB100 Ruby Basics exercises

names = ['Sally', 'Joe', 'Lisa', 'Henry']

loop do
  name = names.pop
  puts name 
  break if names.length < 1
end

