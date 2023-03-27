# Write a method that takes two arguments, a string and a positive integer,
# and prints the string as many times as the integer indicates.
#
# - Get the string
#   - Make sure it's valid, otherwise, ask for another
# - Get the positive integer
#   - Make sure it's valid, otherwise, ask for another
# - Print the integer as many times as the integer says
# - Ask if user wants to do it again

def repeat(string, num)
  num.times { puts string }
end

repeat("Oh my, here we go", 10)


