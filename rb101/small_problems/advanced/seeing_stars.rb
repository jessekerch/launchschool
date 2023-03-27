# Problem:
# Write a method that displays an 8-pointed star in an nxn grid, where n is
# an odd integer that is supplied as an argument to the method.
# The smallest such star you need to handle is a 7x7 grid.

# input: integer, an odd number representing the nxn grid size 
# output: display to screen (no return)
# rules: 7 x 7 is the smallest grid, no highest number given
# rules: input will always be odd, meaning there will always be a middle point
# 8-pointed star to display:
# middle row is n stars long
# other rows will each have 3 stars, n - 3 spaces spread out between them
# other rows will have math to figure out how many spaces and stars
# every 

# Examples
# n = 7:
# space_1, *, space_2, *, space_3, *, space_4
# 1st row: 0 spaces, 1 star, 2 spaces, 1 star, 2 spaces, 1 star, 0 spaces
# 2nd row: 1 space, 1 star, 1 space, 1 star, 1 space, 1 star, 1 space
# 3rd row: 2 spaces, 1 star, 0 spaces, 1 star, 0 spaces, 1 star, 2 spaces
# middle row: 7 stars
# -> 
# line = 1
# end_space = 0, *, mid_space = (n - 3)/2, *, mid_space = (n - 3)/2, *, end_space = 0

# loop repeat
#   line + 1
#   print end_space + 1, * mid_space - 1, *, mid_space - 1, *, end_space + 1
#   break if from line = n / 2 => "mid point"
# end loop for first half

# print n stars for mid_point line

# loop repeat
#   line + 1
#   print end_space - 1, * mid_space - 1, *, mid_space - 1, *, end_space + 1
#   break if from line = n
# end loop for second half

# *  *  *
# * * * 
#   ***  
# *******

# star(7)

# *  *  *
#  * * *
#   ***
# *******
#   ***
#  * * *
# *  *  *

# star(9)

# *   *   *
# *  *  *
#   * * *
#   ***
# *********
#   ***
#   * * *
# *  *  *
# *   *   *

def print_line(end_sp, mid_sp)
  print " " * end_sp + "*" + " " * mid_sp + "*"
  puts " " * mid_sp + "*" + " " * end_sp
end

def star(n)
  end_space = 0
  mid_space = n / 2

  while mid_space > 0 do
    mid_space -= 1
    print_line(end_space, mid_space)
    end_space += 1
  end
  
  puts "*" * n # print n stars for middle line
  
  while end_space > 0 do
    end_space -= 1
    print_line(end_space, mid_space)
    mid_space += 1
  end
end

star(19)