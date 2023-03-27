# Problem: Rotate any matrix by 90 degrees
# input: array of arrays
# output: array of arrays, rotated

# Examples:
# this:
# 3  4  1
# 9  7  5
# becomes:
# 9  3
# 7  4
# 5  1

# because? 
# the old matrix is 3 columns 2 rows
# the new matrix is 2 columns 3 rows
# row 1:
# iterate through row 1, assign each element to next consecutive in last column
# so just go from 0 down to columns, and then 0 down to rows
# 0,0 goes to 0,1 -> 
# 0,1 goes to 1,1
# 0,2 goes to 2,1
# ----
# iterate through row 2, assign each element to last column - 1, from 0 to largest - 1
# 1,1 goes to 1,0
# 1,2 goes to 2,0
  

def rotate90(array)
  transposed_arr = Array.new(array[0].count) { [] }
  rows = array.count - 1
  columns = array[0].count - 1
  rep = 0
  rows.downto(0) do |row|
    columns.downto(0) do |column|
      transposed_arr[column] << array[row][column]
    end
  rep += 1
  end
  transposed_arr
end

matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
]

matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8]
]

new_matrix1 = rotate90(matrix1)
new_matrix2 = rotate90(matrix2)
new_matrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))))

p new_matrix1 == [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
p new_matrix2 == [[5, 3], [1, 7], [0, 4], [8, 2]]
p new_matrix3 == matrix2