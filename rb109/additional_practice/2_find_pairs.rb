=begin

You are given array of integers, your task will be to count all pairs in that array and return their count.

Notes:

    Array can be empty or contain only one value; in this case return 0
    If there are more pairs of a certain number, count each pair only once. E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)
    Random tests: maximum array length is 1000, range of values in array is between 0 and 1000

Examples

[1, 2, 5, 6, 5, 2]  -->  2

...because there are 2 pairs: 2 and 5

[1, 2, 2, 20, 6, 20, 2, 6, 2]  -->  4

...because there are 4 pairs: 2, 20, 6 and 2 (again)

Problem: find pairs
input: array 
output: integer
rules: can be empty, or no pairs, return 0

Example:
[1, 2, 2, 20, 6, 20, 2, 6, 2]  -->  4

Data:
input array
output integer

Steps:
set "pairs" variable to 0
sort array
while array size is 2 or more
remove first element and save as first
remove second element and save as second
while array size is 2 or more
if first and second are the same, add 1 to pairs
otherwise remove first element of array and save as first
if first and second are the same, add 1 to pairs
otherwise remove first element of array and save as first

return pairs 

TRY AGAIN
set "pairs" variable to 0
select only numbers from the array that have a count of 2
pairs = select array size / 2
return pairs
=end

def find_pairs(array)
	pairs = 0
	array.sort!
	while array.size >= 2 do
		current = array.pop
		if current == array[-1]
			pairs += 1
			array.pop
		end
	end
	pairs
end


p find_pairs([1, 2, 5, 6, 5, 2]) == 2
p find_pairs([1, 2, 2, 20, 6, 20, 2, 6, 2]) == 4
p find_pairs([0, 0, 0, 0, 0, 0, 0]) == 3
p find_pairs([1000, 1000]) == 1
p find_pairs([]) == 0
p find_pairs([54]) == 0