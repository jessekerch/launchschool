# Jesse Kercheval
# May 20, 2022
# RB100 Ruby Basics exercises

numbers = [5, 2, 9, 6, 3, 1, 8]
even_numbers = numbers.select { |n| n.even? }

p even_numbers # expected output: [2, 6, 8]