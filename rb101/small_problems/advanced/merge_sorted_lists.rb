# Problem:
# input: 2 arrays, both sorted integers
# output: 1 array, sorted integers

# Examples
# merge([1, 5, 9], [2, 6, 8]) == [1, 2, 5, 6, 8, 9]
# 1, 2, 5, 6, 8, 9
# both lists are sorted, so all I have to do is remove
# the first element of each, compare, and add the lowest to a new array.
# Rinse and repeat, reassigning numbers as they are used.

# data structure:
# two arrays input
# one array output
# intermediate? none

# Algorithm:
# initiate new array variable as empty array
# initiate new integer variable to 0, idx_1
# initiate new integer variable to 0, idx_2
# remove element (element at index idx_1) from 1st array and to assign number_1
# remove element (element at index idx_2) from 2nd array and to assign number_2

# loop 
# break if I have added all numbers to the new array
# compare numbers 
# if idx_1 < length of array 1 AND number_1 is less than number_2
#   add number_1 to the new array
#   + 1 to idx_1
#   reassign number_1 to remove element at idx_1 
# elsif idx_2 < length of array 2 AND number_2 is less than number_1
#   add number_2 to the new array
#   + 1 to idx_2
#   reassign number_2 to remove element at idx_2
# else 
#   break
# end
# end loop

def merge(arr_1, arr_2)
  new_array = []
  until arr_1.empty? || arr_2.empty?
    if arr_1[0] < arr_2[0]
      new_array << arr_1.shift
    elsif arr_2[0] < arr_1[0]
      new_array << arr_2.shift
    end
  end
  new_array + arr_1 + arr_2
end

p merge([1, 5, 9], [2, 6, 8]) == [1, 2, 5, 6, 8, 9]
p merge([1, 1, 3], [2, 2]) == [1, 1, 2, 2, 3]
p merge([], [1, 4, 5]) == [1, 4, 5]
p merge([1, 4, 5], []) == [1, 4, 5]

