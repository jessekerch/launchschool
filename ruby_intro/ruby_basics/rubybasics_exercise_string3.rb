# Jesse Kercheval
# May 18, 2022
# RB100 Ruby Basics exercises

words = 'car human elephant airplane'
word_array = words.split(" ").to_a

word_array.each { |word| puts word + 's' }
