# Write a method that takes two Arrays as arguments,
# and returns an Array that contains all of the values from the argument Arrays.
# There should be no duplication of values in the returned Array, even if there
# are duplicates in the original Arrays.

# Example

# def merge(arr_1, arr_2)
#   new_array = arr_1.uniq
#   arr_2.uniq.each do |num|
#     new_array << num unless arr_1.include?(num)
#   end
#   p new_array
# end

def merge(arr_1, arr_2)
  arr_1.union(arr_2)
end

p merge([1, 3, 5], [3, 6, 9]) == [1, 3, 5, 6, 9]

