# Problem: Next featured number
# input: integer, start number for checking
# output: integer, next featured number after start
# rules: 
#   - number % 7 == 0 
#   - no digits repeat (.digits.uniq == .digits)
#   - odd

# Examples: 

# Data: array to check digits, but otherwise all integers

# algorithm:
# loop
# number = start
# add 1 to number
# return featured as soon as I find it


def featured(num)
  while num < 9_999_999_999 do
    num += 1

    if num % 7 == 0 && num.digits == num.digits.uniq && num.odd?
      return num
    end
    
  end
end

p featured(12) == 21
p featured(20) == 21
p featured(21) == 35
p featured(997) == 1029
p featured(1029) == 1043
p featured(999_999) == 1_023_547
p featured(999_999_987) == 1_023_456_987

featured(9_999_999_999) # -> There is no possible number that fulfills those requirements