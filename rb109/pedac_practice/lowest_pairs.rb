# Given a list of integers and a single sum value, return the first two values
# (parse from the left please) in order of appearance that add up to form the
# sum.
# 
# sum_pairs([11, 3, 7, 5],         10)
# #              ^--^      3 + 7 = 10
# == [3, 7]
# 
# sum_pairs([4, 3, 2, 3, 4],         6)
# #          ^-----^         4 + 2 = 6, indices: 0, 2 *
# #             ^-----^      3 + 3 = 6, indices: 1, 3
# #                ^-----^   2 + 4 = 6, indices: 2, 4
# #  * entire pair is earlier, and therefore is the correct answer
# == [4, 2]
# 
# sum_pairs([0, 0, -2, 3], 2)
# #  there are no pairs of values that can be added to produce 2.
# == None/nil/undefined (Based on the language)
# 
# sum_pairs([10, 5, 2, 3, 7, 5],         10)
# #              ^-----------^   5 + 5 = 10, indices: 1, 5
# #                    ^--^      3 + 7 = 10, indices: 3, 4 *
# #  * entire pair is earlier, and therefore is the correct answer
# == [3, 7]
# Negative numbers and duplicate numbers can and will appear.
# 
# There will also be lists tested of lengths upwards of 10,000,000
# elements. Be sure your code doesn't time out.

# p sum_pairs([1, 4, 8, 7, 3, 15], 8) == [1, 7] 
# p sum_pairs([1, -2, 3, 0, -6, 1], -6) == [0, -6]
# p sum_pairs([20, -13, 40], -7) == nil
# p sum_pairs([1, 2, 3, 4, 1, 0], 2) == [1, 1]
# p sum_pairs([10, 5, 2, 3, 7, 5], 10) == [3, 7]
# p sum_pairs([4, -2, 3, 3, 4], 8) == [4, 4]
# p sum_pairs([0, 2, 0], 0) == [0, 0]
# p sum_pairs([5, 9, 13, -3], 10) == [13, -3] 

# Problem:
# - input: two arguments
#   - first argument is an array of integers
#   - second is a single integer, representing a sum
# - output: array, representing pair of integers which add up to the sum
# - rules:
#   - output pair must add up to the sum
#   - output pair has to be the first pair appearing in the array (farthest left)
#   - parse array of integers from left to right
#   - if no pair adds up to the sum, return nil
#   - sum can be zero

# Examples: 
# # sum_pairs([10, 5, 2, 3, 7, 5],         10)
# # #              ^-----------^   5 + 5 = 10, indices: 1, 5
# # #                    ^--^      3 + 7 = 10, indices: 3, 4 *
# 10 + 5 = 15 != 10
# 10 + 2 = 12 != 10
# 10 + 3 = 13 != 10
# 10 + 7, 10 + 5, all not equal to 10

# 5 + 2, 5 + 3, 5 + 7
# 5 + 5 which is equal to 10 # works
# 2 + 3, 2 + 7, 2 + 5
# 3 + 7 which is equal to 10 # works
# 3 + 5, 7 + 5
# [[5, 5], [3, 7]] => [[1, 5], [3, 4]] => pair[1][1] is less than pair[0][1] ?? 
# * so the pair with the lower second number wins

# Data Structures:
#   - Array
#     - input argument

#   - Integer
#     - input argument

#   - Array
#     - holds all valid pairs

#   - Array
#     - return value

#  - input array, and integer
#  - output array => return array
#  - intermediate array => holds all valid pairs

# ALGORITHM:
#   - define a method that takes two arguments, an array and an integer
#     - initialize a variable which points to an empty array called valid_pairs
#     - initialize a left_index variable which points to an integer, starting at 0
#     - initialize a right_index variable which points to an integer, starting at 1
#     - intitalize a variable pointing to an integer which represents the total number of elements in the array, array_size
#     - iterate over the array (outer loop)
#       - iterate over the array (inner loop)
#         - take the sum of the integer at the left_index position and integer at the right_index position in the array 
#         - if sum of the pair is equal to input target sum, add pair to valid pair array 
#         - add 1 to the right_index variable
#         - break out of loop if right_index equals array_size

#         - add 1 to my left_index 
#         - break out of loop if left_index equals equals 1 less than right_index

#         - initialize a variable called lowest_pair pointing to nil
#         - iterate over valid_pairs nested array
#           - for each subarray containing a pair of integers
#       - initialize a variable equal to 0 called lowest_index
#       - check the index of the integer at the second position (index 1) of each pair in the valid_pairs array
#       - if the index is lower than the value of lowest_index, reassign lowest_index to the current index position
#       - reassign lowest_pair variable to pair on current iteration

#   - return lowest_pair, which holds a pair of integers, the sum of which equals the second input argument

#   valid_pairs.each { |pair| if ... lowest_pair = pair

def sum_pairs(array, target_sum)
  valid_pairs = {}

  0.upto(array.size - 2) do |left_idx| 
    (left_idx + 1).upto(array.size - 1) do |right_idx|
      if array[left_idx] + array[right_idx] == target_sum
        valid_pairs[[array[left_idx], array[right_idx]]] = right_idx
      end
    end
    break if valid_pairs.size >= 3
  end
  
  valid_pairs = valid_pairs.sort_by { |pair, index| index }.to_h
  valid_pairs.keys.first
end

p sum_pairs([1, 4, 8, 7, 3, 15], 8) == [1, 7] 
p sum_pairs([1, -2, 3, 0, -6, 1], -6) == [0, -6]
p sum_pairs([20, -13, 40], -7) == nil
p sum_pairs([1, 2, 3, 4, 1, 0], 2) == [1, 1]
p sum_pairs([10, 5, 2, 3, 7, 5], 10) == [3, 7]
p sum_pairs([4, -2, 3, 3, 4], 8) == [4, 4]
p sum_pairs([0, 2, 0], 0) == [0, 0]
p sum_pairs([5, 9, 13, -3], 10) == [13, -3] 