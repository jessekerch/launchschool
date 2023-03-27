=begin

687. Divisible Sum Pairs 
(https://www.hackerrank.com/challenges/divisible-sum-pairs/problem)

Given an array (arr) of integers, and a positive integer k.
Find the number of pairs (i, j) having the sum (arr[i] + arr[j]) that is divisible by k and i < j. 

Example:
[1, 3, 2, 6, 1, 2], 3) => 5
{1 => true} [3, 2, 6, 1, 2]
3? 3 + 1 = 3 % 3 == 0?, no
{ 1 => true, 3 => true } [2, 6, 1, 2]

1+2=3 YES; 1<2 YES pairs +1; 3+2=5; NO

Data:
input: array, and number
output: number
interm: hash

Algo:
define method to take two params, arr and div
"pairs" equal to every possible permutation of 2 numbers from "arr" array
select only the pairs where sum is divisible by div AND 1st num is less than 2nd num
return count of pairs selected

Algo2:
define method to take two params, arr and div
set pairs = 0
iterate "left" from 0 to arr size - 1
  iterate "right" from left to arr size - 1
    add [left, right] to pairs
select only pairs where sum is divisible by input div and left < right
return count of selected pairs

=end

# Coding v1
def divisible_sum_pairs(arr, div)
  pairs = []
  arr.permutation(2) { |pair| pairs << pair }
  pairs = pairs.select { |pair| (pair.sum) % div == 0 && pair[0] < pair[1] }
  pairs.count
end

#Coding v2
def divisible_sum_pairs(arr, div)
  pairs = []
  0.upto(arr.size - 1) do |left|
    0.upto(arr.size - 1) do |right|
      if [arr[left], arr[right]].sum % div == 0 && arr[left] < arr[right]
        pairs << [arr[left], arr[right]]
      end
    end
  end
  pairs.count
end

# def divisible_sum_pairs(arr, k)
#   all_pairs = []
#   arr.combination(2).to_a.each { |curr_pair| all_pairs << curr_pair }
#   all_pairs.select{ |curr_pair| curr_pair.sum % k == 0 }.count
# end

p divisible_sum_pairs([1, 3, 2, 6, 1, 2], 3) == 5
p divisible_sum_pairs([8, 10], 2) == 1
p divisible_sum_pairs([5, 9, 10, 7, 4], 2) == 4
p divisible_sum_pairs([29, 97, 52, 86, 27, 89, 77, 19, 99, 96], 3) == 15
p divisible_sum_pairs([43, 95, 51, 55, 40, 86, 65, 81, 51, 20, 47, 50, 65, 53, 23, 78, 75, 75, 47, 73, 25, 27, 14, 8, 26, 58, 95, 28, 3, 23, 48, 69, 26, 3, 73, 52, 34, 7, 40, 33, 56, 98, 71, 29, 70, 71, 28, 12, 18, 49, 19, 25, 2, 18, 15, 41, 51, 42, 46, 19, 98, 56, 54, 98, 72, 25, 16, 49, 34, 99, 48, 93, 64, 44, 50, 91, 44, 17, 63, 27, 3, 65, 75, 19, 68, 30, 43, 37, 72, 54, 82, 92, 37, 52, 72, 62, 3, 88, 82, 71], 22) == 216
# WTF, why doesn't this long test case work? Supposed to get 216 but keep getting 215...

