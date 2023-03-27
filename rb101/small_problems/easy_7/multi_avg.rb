# PROBLEMS:
# input: array of integers
# output: float, rounded to exactly 3 decimal places (even if x.000)
# rules: output float equals product of input integers divided by entries
# rules: input array is non-empty
#
# EXAMPLES:
# input: [3, 5]
# output: print 7.500
# intermediate steps:
# 3 x 5 = 15
# 15 / 2 = 7.5
# 7.5 rounded is 7.500
#
# input: [6]
# output: print 6.000
# intermediate: 
# 6 x 1 = 6
# 6 / 1 = 6
# 6 rounded is 6.000

# DATA STRUCTURES:
# array object for input
# float object for output, rounded to 3 decimal places

# ALGORITHM


def show_multiplicative_average(array)
  product = array.reduce(:*)
  size = array.size.to_f
  result = product / size
  puts "The result is #{sprintf("%0.3f", result)}"
end


show_multiplicative_average([3, 5])                # => The result is 7.500
show_multiplicative_average([6])                   # => The result is 6.000
show_multiplicative_average([2, 5, 7, 11, 13, 17]) # => The result is 28361.667

