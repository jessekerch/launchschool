# In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4,
# unless the year is also divisible by 100.
# If the year is evenly divisible by 100, then it is not a leap year unless the year is evenly divisible by 400.

# Assume this rule is good for any year greater than year 0.
# Write a method that takes any year greater than 0 as input, and returns true if the year is a leap year,
# or false if it is not a leap year

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
  
# performing in reverse, i.e. mod 4 first
def leap_year?(year)
  if year % 4 == 0
    if year % 100 == 0
      if year % 400 == 0
        true
      else false
      end
    else true
    end
  else false
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
p leap_year?(1700) == false
p leap_year?(1) == false
p leap_year?(100) == false
p leap_year?(400) == true