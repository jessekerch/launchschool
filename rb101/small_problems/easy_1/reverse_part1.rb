# Write a method that takes one argument, a string, and returns a new string with the words in reverse order.
# had to learn a new method .join because .to_s and .inspect weren't working

def reverse_sentence(string)
  string.split.reverse.join(" ")
end  

puts reverse_sentence('Hello World') 
puts reverse_sentence('Reverse these words') 
puts reverse_sentence('')
puts reverse_sentence('    ')

# The tests above should print true.