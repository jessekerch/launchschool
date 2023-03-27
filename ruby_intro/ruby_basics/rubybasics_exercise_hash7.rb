# Jesse Kercheval
# May 18, 2022
# RB100 Ruby Basics exercises

numbers = { high: 100, medium: 50, low: 10 }
low_numbers = numbers.select! { |k, v| v < 25 }

p numbers
p low_numbers
