=begin

Problem:
"select the element out of the array if its index is a fibonacci number"
input: array
output: array
rules: output array only contains elements whose index was fibonacci number

Example:

Data:
input: array
output: array

Steps:
set "fib_idx" array to [0, 1] to start
set "fib_arr" new array to empty array to start
loop until fib_idx last number is greater than the size of the input array
  add input array element at fib_idx index position to new array
  add to fib_arr the sum of last two numbers (index -1 and -2)
repeat

=end

# def fib_idx(arr)
#   fib_idx = [0, 1]
#   fib_arr = []
#   while fib_idx.last < arr.size do
#     fib_arr << arr[fib_idx.last]
#     fib_idx << fib_idx[-1] + fib_idx[-2]
#   end
#   fib_arr
# end

def fib_idx(arr)
  fib_idx = [0, 1]
  while fib_idx.last < arr.size do
    fib_idx << fib_idx[-1] + fib_idx[-2]
  end
  arr.select { |n| fib_idx.include?(arr.index(n)) }
end

p fib_idx([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]) == [0, 1, 2, 3, 5, 8, 13]