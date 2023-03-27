=begin
# Codewars: Josephus Survivor
# https://www.codewars.com/kata/555624b601231dc7a400017a/train/ruby

# In this kata you have to correctly return who is the "survivor", ie: the last
# element of a Josephus permutation.
# 
# Basically you have to assume that n people are put into a circle and that they
# are eliminated in steps of k elements, like this:
# 
# josephus_survivor(7,3) => means 7 people in a circle;
# one every 3 is eliminated until one remains
# [1,2,3,4,5,6,7] - initial sequence
# [1,2,4,5,6,7] => 3 is counted out
# [1,2,4,5,7] => 6 is counted out
# [1,4,5,7] => 2 is counted out
# [1,4,5] => 7 is counted out
# [1,4] => 5 is counted out
# [4] => 1 counted out, 4 is the last element - the survivor!
# The above link about the "base" kata description will give you a more thorough
# insight about the origin of this kind of permutation, but basically that's all
# that there is to know to solve this kata.
# 
# Notes and tips: using the solution to the other kata to check your function
# may be helpful, but as much larger numbers will be used, using an array/list
# to compute the number of the survivor may be too slow; you may assume that
# both n and k will always be >=1.

# p josephus_survivor(7,3) == 4
# p josephus_survivor(1,300) == 1
# p josephus_survivor(14,2) == 13
# p josephus_survivor(100,1) == 100

Problem:
input: integer x 2
output: integer
rules:
first integer is n number of people
second integer is interval, k, jumps between people
n and k will always be >= 1

Example:
(7,3) == 4
[1, 2, 3, 4, 5, 6, 7] every 3
1, 2, 4, 5, 6, 7
1, 2, 4, 5, 7
1, 4, 5, 7
1, 4, 5
1, 4
4

Data:
input: integer n, integer k
output: integer
interm: array of numbers

Steps:
define method josephus_survivor to take two parameters, n and k
create array of n elements
initialize "index" at 0
loop while array size > 1
  -> HELPER (add k mod array size, but reset to 0 if it goes over the end of the array)
  jump(index, k, array size)
    k = k % array size
    while k > 0 
      if index == array.size - 1, index = 0
      else index = index + 1
      k = k - 1
    end while loop
  
  delete index counter element from array
end loop
return array (last element remaining in the array)

Scratchpad:
Don't jump 3 spaces, jump 3 % array.size spaces. k = 3 % 7
Also when I get to the end of the array, I need to start back at 0
=end

def jump(idx, moves, group_size)
  while moves > 1
    idx >= (group_size - 1) ? idx = 0 : idx += 1
    moves -= 1
  end
  idx
end

def josephus_survivor(n, k)
  array = []
  1.upto(n) { |num| array << num }
  index = 0
  while array.size > 1 do 
    index = jump(index, k, array.size)
    p index
    p array.delete_at(index)
  end
  array
end

p josephus_survivor(7,3) #== 4
# p josephus_survivor(1,300) == 1
# josephus_survivor(14,10) == 9
# josephus_survivor(14,2) == 13
# p josephus_survivor(100,1) == 100