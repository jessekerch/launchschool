# PROBLEM:
# - input: Integer object, representing the year
# - output: Boolean object, true if leap year, otherwise false
# - rules:
#   - input greater than 0
#   - leap year is divisible by four. Divisible by 100 is not, but by 400 is.

# EXAMPLES:

# DATA STRUCTURES:
# - Integer for input
# - Boolean for output
# - no collections should be needed, yes control expressions

# ALGORITHM:
# - make a method leap_year? that returns true for leap years, false for non
#   - check if year is disible by 4
#     - if divisible by four, check if divisible by 100
#       - if not divisble by 100, return true
#         - if divisible by both, check if divisible by 400
#           - if divisible by 400, return true
#         - otherwise return true
#   - if not divisible by 4, return false
  
#   CODING:

# def leap_year?(year)
#   (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)
# end
  
# performing in reverse, i.e. mod 4 first
def leap_year?(year)
  if year % 400 == 0
    true
  elsif year > 1752 && year % 100 == 0 
    false
  else
    year % 4 == 0 
  end
end

p leap_year?(2016) == true
p leap_year?(2015) == false
p leap_year?(2100) == false
p leap_year?(2400) == true
p leap_year?(240000) == true
p leap_year?(240001) == false
p leap_year?(2000) == true
p leap_year?(1900) == false
p leap_year?(1752) == true
p leap_year?(1700) == true
p leap_year?(1) == false
p leap_year?(100) == true
p leap_year?(400) == true