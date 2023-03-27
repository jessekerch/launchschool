# Problem:
# input: two arguments
#   - first argument: integer, digits
#   - second argument: integer, n number of digits

# output: return integer (rotated digits)

#   - Rules: input is integer, multiple digits
#     - output is same number of digits, with n number of them rotated
#       - rotated means that leftmost digit will be moved to rightmost position

#   - Mental Model: (735291, 2) == 735219
#     - 735291, 2
#       - last 2 digits will be the 9 and the 1
#         - 4th index and 5th index
#         - -2 and -1 index positions
#       - rotating the 91 will give me 19
#       - output will be 735219

# EXAMPLES
# # rotate_rightmost_digits(735291, 1) == 735291
# # rotate_rightmost_digits(735291, 2) == 735219
# # rotate_rightmost_digits(735291, 3) == 735912
# # rotate_rightmost_digits(735291, 4) == 732915
# # rotate_rightmost_digits(735291, 5) == 752913
# # rotate_rightmost_digits(735291, 6) == 352917

# DATA STRUCTURES
#   - integer input
#   - integer output
#   - array (of digits in input), passed as argument to rotate method
  
# ALGORITHM
# define a method called rotate_rightmost_digits
#   - method takes two arguments, integer and integer
#     - first argument is digits to rotate
#     - second argument is n number of digits to rotate
#   - split integer into an array of digits, and reverse to get back to original order
#   - remove last n elements of the array, and assign to a new array
#   - pass the new array to the rotate method, which will return the new array, rotated
#   - add the returned n element new array to the end of the array (original)
#   - join the array back into a string
#   - convert the string into an integer
#   - return the integer
#     - integer has last n digits rotated

def rotate_array(arr)
  arr[1..-1] << arr[0]
end

def rotate_rightmost_digits(number, n)
  array = number.digits.reverse
  new_array = array.pop(n)
  array += rotate_array(new_array)
  array.join.to_i
end

p rotate_rightmost_digits(735291, 1) == 735291
p rotate_rightmost_digits(735291, 2) == 735219
p rotate_rightmost_digits(735291, 3) == 735912
p rotate_rightmost_digits(735291, 4) == 732915
p rotate_rightmost_digits(735291, 5) == 752913
p rotate_rightmost_digits(735291, 6) == 352917
