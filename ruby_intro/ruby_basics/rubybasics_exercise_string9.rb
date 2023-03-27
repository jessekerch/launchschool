# Jesse Kercheval
# May 18, 2022
# RB100 Ruby Basics exercises

# I learned that you can also do words.split(' ').each because .split returns an array! Nice!

words = 'car human elephant airplane'
word_array = words.split(" ").to_a

word_array.each { |word| puts word + 's' }
