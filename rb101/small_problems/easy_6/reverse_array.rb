# Write a method that takes an Array as an argument,
# and reverses its elements in place;
# that is, mutate the Array passed into this method.
# The return value should be the same Array object.

# You may not use Array#reverse or Array#reverse!.

# PROBLEM
# input: Array with any number of elements, can be empty
# output: Array, the same object, mutated 
# rules: output elements should be in reverse order of input array
# return value should be the same array object 

# Examples:
# list = [1,2,3,4]
# result = reverse!(list)
# result == [4, 3, 2, 1] # true
# list == [4, 3, 2, 1] # true
# list.object_id == result.object_id # true



# Data Structure
# - Array object used for input, same for output
# - array elements may be strings, integers, or empty

# Scratchpad:
# - The shift method will remove and return the first element(s)
# - The pop method will remove and return the last element
# - The push or << methods will tack an element onto the end of an array
# - The unshift method will tack an element onto the beginning

def reverse!(array)
  left = 0
  right = -1
  
  while left < array.size / 2
    array[left], array[right] = array[right], array[left]
    left += 1
    right -= 1
  end

  array
end

p list = %w(a b e d c)
p reverse!(list) == ["c", "d", "e", "b", "a"] # true
p list == ["c", "d", "e", "b", "a"] # true

p list = %w(a b c d e f g)
p reverse!(list) == ["g", "f", "e", "d", "c", "b", "a"] # true
p list == ["g", "f", "e", "d", "c", "b", "a"] # true

p list = ['abc']
p reverse!(list) == ["abc"] # true
p list == ["abc"] # true

p list = []
p reverse!(list) == [] # true
p list == [] # true

# Note: for the test case list = ['abc'], we want to reverse the elements
# in the array. The array only has one element, a String,
# but we're not reversing the String itself, so the reverse! method call should return ['abc'].