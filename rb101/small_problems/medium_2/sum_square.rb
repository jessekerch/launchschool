# # Problem:
# # Write a method that computes the difference between the square of the sum
# # of the first n positive integers and the
# # sum of the squares of the first n positive integers.

# # input: integer, n positive integers
# # output: integer, difference between 
# # rules: difference between square of sum and sum of squares
# # - no zeros

# Data structures:
# input: integer
# output: integer
# intermediate? I think all integers, just math

# square_sum = (1 + 2 + 3)**2
# sum_square = (1**2 + 2**2 + 3**2)

# algorithm:


# Examples:

def sum_square_difference(n)
  square_sum = 0
  sum_square = 0
  1.upto(n) do |i|
    square_sum += i
    sum_square += i**2
  end
  
  square_sum ** 2 - sum_square
end

p sum_square_difference(3) == 22
   # -> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
p sum_square_difference(10) == 2640
p sum_square_difference(1) == 0
p sum_square_difference(100) == 25164150