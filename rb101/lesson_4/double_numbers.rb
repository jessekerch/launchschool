def double_numbers!(array)
  counter = 0
  loop do
    break if counter >= array.size
    array[counter] *= 2
    counter += 1
  end
  array
end

my_numbers = [1, 4, 3, 7, 2, 6]
p my_numbers
p double_numbers!(my_numbers) # => [2, 8, 6, 14, 4, 12]
p my_numbers