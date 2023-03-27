# # Write a method that calculates and returns the index of the first
# Fibonacci number that has the number of digits specified as an argument.
# (The first Fibonacci number has index 1.)

def find_fibonacci_index_by_length(size)
  previous = 0
  current = 1
  total = 0
  index = 1

  until total.digits.size >= size do
    total = current + previous
    previous = current
    current = total
    index += 1
  end

  index
end

# Examples:

p find_fibonacci_index_by_length(2) == 7          # 1 1 2 3 5 8 13
p find_fibonacci_index_by_length(3) == 12         # 1 1 2 3 5 8 13 21 34 55 89 144
p find_fibonacci_index_by_length(10) == 45
p find_fibonacci_index_by_length(100) == 476
p find_fibonacci_index_by_length(1000) == 4782
p find_fibonacci_index_by_length(10000) == 47847