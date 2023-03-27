# Jesse Kercheval
# May 16, 2022
# RB100
# gotta remember the scope for variables 
# numbers are immutable, but strings are mutable
# but but! assignment to a variable (an object) never mutates the object that is referenced

a = 7

def my_value(b)
  b = a + a
end

my_value(a)
puts a