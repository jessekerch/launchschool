=begin
Given a list of integers and a single sum value,
return the first two values (parse from the left please) in order of appearance that add up to form the sum.

If there are two or more pairs with the required sum,
the pair whose second element has the smallest index is the solution.

sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]

sum_pairs([4, 3, 2, 3, 4],         6)
#          ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * the correct answer is the pair whose second value has the smallest index
== [4, 2]

sum_pairs([0, 0, -2, 3], 2)
#  there are no pairs of values that can be added to produce 2.
== None/nil/undefined (Based on the language)

sum_pairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * the correct answer is the pair whose second value has the smallest index
== [3, 7]

Negative numbers and duplicate numbers can and will appear.

NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements.
Be sure your code doesn't time out.

Problem:
return pair of integers from the array that add up to the given sum
input: array of numbers, sum
output: array of two numbers (pair) that add up to sum
rules:
return nil if no pair adds up to the target sum
return first pair from left (2nd element has smallest index)
again, return the pair that finishes first, not starts first

Example:
[10, 5, 2, 3, 7, 5] sum of 10


Data:
input: array, integer
output: array
interm: hash for performance I guess??


Algo:
define method sum_pairs to take two parameters, arr and sum
set "pairs" variable to an empty array
iterate "left" index from 0 to array size - 2
  iterate "right" index from 1 to array size - 1
    if left element plus right index element = sum, add the pair and right index number as an array to "pairs"
return pair with the minimum index


=end

# def sum_pairs(arr, sum)
#   pairs = []
#   1.upto(arr.size - 1) do |right|
#     0.upto(right - 1) do |left|
#       if arr[left] + arr[right] == sum
#         return [arr[left], arr[right]]
#       end
#     end
#   end
#   !!pairs.min ? pairs.min[0] : nil
# # end

# def sum_pairs(arr, sum)
#   hsh = {}
#   hsh2 = {}
#   pairs = []
#   arr.each_with_index do |num, idx|
#     hsh[idx] = num
#   end
#   hsh.each do |k, v|
#     if hsh2[k]
#       hsh2[k] = v + hsh2[k]
#     else
#       hsh2[k] = v
#     end
#   end
#   p hsh2
# end

# def sum_pairs(arr, sum)
#   1.upto(arr.size - 1) do |right_idx|
#     (right_idx - 1).downto(0) do |left_idx|
#       return [arr[left_idx], arr[right_idx]] if arr[left_idx] + arr[right_idx] == sum
#     end
#   end
#   nil
# end

# var sum_pairs=function(ints, s){
#   if (ints.length < 2) return undefined; //not enough numbers for pair.
#   let intSet = new Set()
#   intSet.add(ints[0]);
#   for (let i=1; i < ints.length; ++i){
#     let needed = s-ints[i];
#     if (intSet.has(needed)){//check if we have already seen the number needed to complete the pair.
#       return [needed,ints[i]];
#     }
#     intSet.add(ints[i]);//if not insert the number in set and continue.
#   }
#   return undefined;//No answer found
# }

# def sum_pairs(arr, sum)
#   return nil if arr.size < 2
#   hsh = {}
#   hsh[arr[0]] = 0
#   (1..(arr.size - 1)).each do |idx|
#     needed = sum - arr[idx]
#     if hsh.has_key?(needed)
#       return [needed, arr[idx]]
#     else
#       hsh[arr[idx]] = idx
#     end
#   end
#   nil
# end

def sum_pairs(arr, sum)
  # return nil if arr.size < 2
  # hsh[arr[0]] = 0
  hsh = {}
  for num in arr do
    return [sum - num, num] if hsh[sum - num]
    hsh[num] = true
    p hsh
  end
  nil
end

l1= [1, 4, 8, 7, 3, 15]
l2= [1, -2, 3, 0, -6, 1]
l3= [20, -13, 40]
l4= [1, 2, 3, 4, 1, 0]
l5= [10, 5, 2, 3, 7, 5]
l6= [4, -2, 3, 3, 4]
l7= [0, 2, 0]
l8= [5, 9, 13, -3]

p sum_pairs(l1, 8) #== [1, 7] # "Basic: ["+l1.join(", ")+"] should return [1, 7] for sum = 8")
p sum_pairs(l2, -6) #== [0, -6] # "Negatives: ["+l2.join(", ")+"] should return [0, -6] for sum = -6")
p sum_pairs(l3, -7) #== nil #, "No Match: ["+l3.join(", ")+"] should return nil for sum = -7")
p sum_pairs(l4, 2) #== [1, 1] #, "First Match From Left: ["+l4.join(", ")+"] should return [1, 1] for sum = 2 ")
p sum_pairs(l5, 10) #== [3, 7] #, "First Match From Left REDUX!: ["+l5.join(", ")+"] should return [3, 7] for sum = 10 ")
p sum_pairs(l6, 8) #== [4, 4] #, "Duplicates: ["+l6.join(", ")+"] should return [4, 4] for sum = 8")
p sum_pairs(l7, 0) #== [0, 0] #, "Zeroes: ["+l7.join(", ")+"] should return [0, 0] for sum = 0")
p sum_pairs(l8, 10) #== [13, -3] #, "Subtraction: ["+l8.join(", ")+"] should return [13, -3] for sum = 10")
