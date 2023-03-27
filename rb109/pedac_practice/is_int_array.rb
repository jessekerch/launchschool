=begin
Write a function with the signature shown below:
- returns true if every element in an array is an integer or a float with no decimals.
- returns true if array is empty.
- returns false for every other input.

Problem:
input: array
output: boolean
rules:
 return true if every element in the input array is an integer (or float with no decimals)
 return true if array is empty
 return false for anything else

Examples:
is_int_array([1, 2, 3, 4]) == true
1, 2, 3, 4 all integers, return true

Steps:
iterate through each element of the input array
reject any elements where converting it to a string and then integer equals the original element
any elements that are not integers or floats without decimal will remain in the array
return true if the array is empty
=end

def is_int_array(arr)
  arr.class == Array ? arr.all? { |elem| elem.to_i == elem } : false
end

# test cases
p is_int_array([]) == true
p is_int_array([1, 2, 3, 4]) == true
p is_int_array([-11, -12, -13, -14]) == true
p is_int_array([1.0, 2.0, 3.0]) == true
p is_int_array([1, 2, nil]) == false
p is_int_array(nil) == false
p is_int_array("") == false
p is_int_array([nil]) == false
p is_int_array([1.0, 2.0, 3.0001]) == false
p is_int_array(["-1"]) == false