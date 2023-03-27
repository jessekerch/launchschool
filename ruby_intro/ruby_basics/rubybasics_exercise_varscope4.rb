# Jesse Kercheval
# May 16, 2022
# RB100
# gotta remember the scope for variables 
# numbers are immutable, but strings are mutable
# plus String#[]= mutates the caller

a = "Xyzzy"

def my_value(b)
  b = 'yzzyX'
end

my_value(a)
puts a