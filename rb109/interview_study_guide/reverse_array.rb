=begin

Problem:
"reverse an array without using the built-in reverse method"
input: array
output: array
rules: reverse
don't use built-in reverse method

Examples:
[1, 2, 3] -> [3, 2, 1]

1, 2, 3 ->
3 ->
3, 2 ->
3, 2, 1

Data:
input: array
output: array

Steps:
remove the last element of the array
add the last element to a new array
repeat until the array is empty
return the new array

=end
 
def reverse(arr)
  new_arr = []
  while arr.size > 0 do
    new_arr << arr.pop
  end
  new_arr
end

p reverse(%w(e s r e v e r)) == %w(r e v e r s e)
