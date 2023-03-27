# Jesse Kercheval
# Write a method that takes one argument, a positive integer, and returns the sum of its digits.
# Did this one in a study session with Richard Lee from Toronto on 6.7.2022.
# He showed me the PEDAC process with the template and I came up with this 1 line solution. Really happy with it!

def sum(num)
  num.digits.sum
end

# Examples:
puts sum(23) == 5
puts sum(496) == 19
puts sum(123_456_789) == 45

