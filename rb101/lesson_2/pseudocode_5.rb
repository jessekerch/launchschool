# a method that takes two arrays of numbers and returns the result of merging the arrays
# (assume that both array arguments have the same number of elements)
# The elements of the first array should become the elements at the even indexes of the returned array,
# while the elements of the second array should become the elements at the odd indexes.
# Example: merge([1, 2, 3], [4, 5, 6]) # => [1, 4, 2, 5, 3, 6]

# SET array1 = first array of elements to become even indexes
# SET array2 = second array of elements to become odd indexes
# SET merged_arr = the merged array 
# SET index = index iterator start at 0
#
# WHILE index <= number of characters in array1 - 1  (since I need to start at 0)
#   merged_arr << array1[index]
#   merged_arr << array2[index]
#   index += 1
#
# RETURN merged_arr

def merge(array1, array2)
  merged_arr = []
  index = 0
  
  while index <= (array1.length - 1) do
    merged_arr << array1[index] << array2[index]
    index += 1
  end

  merged_arr
end

p merge([1, 2, 3], [4, 5, 6]) # => [1, 4, 2, 5, 3, 6]