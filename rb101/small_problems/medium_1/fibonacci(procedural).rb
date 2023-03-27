# Problem:
# - Input: integer, n
# - Output: integer, nth fibonacci sequence number
# - Rules: start with 1, 1, and continue adding until you reach the nth recursion

# Examples/Rules:
# 5 -> 
# 1, 1, 2, 3, 5 -> 5

# Data Structures:
# - input structure:
# - output structure:
# - intermediate steps?

# Algorithm
  # x = 1
  # y = 1
  # rep = 1
  # loop until rep = n
  #   z = x + y
  #   x = y
  #   y = z
  #   rep + 1
  
    
#   - 
# - return or output?

# Code

def fibonacci(n)
  return 1 if n < 2
  x = 1
  y = 1
  z = x + y
  3.upto(n) do
    z = x + y
    x = y
    y = z
  end
  z
end

p fibonacci(20) == 6765
p fibonacci(100) == 354224848179261915075
p fibonacci(100_001) #= 4202692702.....8285979669707537501