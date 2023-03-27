def multiply(numbers, multiplier)
  counter = 0
  new_numbers = []
  loop do
    break if counter >= numbers.size
    new_numbers << numbers[counter] * multiplier
    counter += 1
  end
  new_numbers
end
  
my_numbers = [1, 4, 3, 7, 2, 6]
p multiply(my_numbers, 3) # => [3, 12, 9, 21, 6, 18]