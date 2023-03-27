# Problem: transpose 3x3
# input: 3 by 3 matrix: array of 3 arrays, each with 3 elements
# output: new 3 x 3 matrix
# rules: output must be transposed
#   ouput must be a new array, input must not be mutated
#   cannot use #transpose method or #matrix class

# Example
# matrix = [
#   [1, 5, 8],
#   [4, 7, 2],
#   [3, 9, 6]
# ]

# [1, 4, 3] -> 0, 0; 1, 0; 2, 0
# next      -> 0, 1; 1, 1; 2, 1
# next      -> 0, 2; 1, 2; 2, 2

# algorithm:
# define a method to transpose a matrix

# initiate new array object, pointed to by variable "new_array" 
# row starts at 0
# iterate from 0 up to array size - 1 => parameter "right"
#   iterate from 0 up to array size - 1 => parameter "left"
#     add matrix element at index position matrix[left, right] to new_array row
#   end left iteration
# end right iteration
# add 1 to row, so numbers will be added to next row in the new array
# return new_array

def transpose(array)
  transposed_arr = Array.new(array.size) { [] }
  row = 0
  0.upto(array.size - 1) do |right|
    0.upto(array.size - 1) do |left|
      transposed_arr[row] << array[left][right]
    end
  row += 1
  end
  transposed_arr
end

def transpose!(array)
  0.upto(array.size - 2) do |row|
    1.upto(array.size - 1) do |column|
      array[column][row], array[row][column] = array[row][column], array[column][row] 
    end
  end
  array
end

matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
]

new_matrix = transpose(matrix)

p new_matrix == [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
p matrix == [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

p transpose!(matrix) == [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
p matrix == [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
