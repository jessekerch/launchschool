# # Write a method that displays a 4-pointed diamond in an n x n grid,
# # where n is an odd integer that is supplied as an argument to the method.
# # You may assume that the argument will always be an odd integer.

# Problem:
# - Input: integer, odd, n => number of rows
# - Output: n rows of "*"'s and " "'s to display a diamond
# - Rules: each row will have n characters

# Examples/Rules:
# input n = 9 ->
#   row1: display "    *    " -> " " * 4 (-= 1); "*" * 1
#   row2: display "   ***   " -> " " * 3 (-= 1); "*" * 3 (+= 2)
#   row3: display "  *****  " -> " " * 2 (-= 1); "*" * 5 (+= 2)
#   row4: display " ******* " -> " " * 1 (-= 1); "*" * 7 (+= 2)
#   row5: display "*********" -> " " * 0 (-= 1); "*" * 9 (+= 2)
#   row6: display " ******* " -> " " * 1 (+= 1); "*" * 7 (-= 2)
#   row7: display "  *****  " -> " " * 2 (+= 1); "*" * 5 (-= 2)
#   row8: display "   ***   " -> " " * 3 (+= 1); "*" * 3 (-= 2)
#   row9: display "    *    " -> " " * 4 (+= 1); "*" * 1 (-= 2)


# Data Structures:
# - input structure: integer 
# - output structure: strings, display n times
# - intermediate steps? string objects, at least "*" and " "

# Steps
# - first half variable integer is n/2
# - second half is n - first half integer (remainder)

# - loop first half times
#   - each time, add two stars and remove one space
#   - display building rows, up to n number of "*"s #helper method
#     - get number of spaces and stars from main method
#     - print spaces * " " and stars * "*" and spaces again
# - loop second half times
#   - each time, add one space and remove two stars
#   - display spaces, stars, spaces # same helper method as above
#     - get number of spaces and stars from main method
#     - print spaces * " " and stars * "*" and spaces again

# Code

# Examples

# diamond(1)
# *

# diamond(3)
# *
# ***
# *
 
# diamond(5)
#   *
# *** 
# *****
# ***
#   *

# diamond(9)
#     *
#   ***
#   *****
# *******
# *********
# *******
#   *****
#   ***
#     *

def diamond(n)
  spaces = n / 2
  stars = 1
  first_half = (n / 2) + 1
  second_half = n - first_half
  
# first half of diamond
first_half.times do
    print_row(spaces, stars)
    spaces -= 1
    stars += 2
  end

# middle row
  spaces += 1
  stars -= 2

#second half of diamond
  second_half.times do
    spaces += 1
    stars -= 2
    print_row(spaces, stars)
  end
  
end

def print_row(blanks, aster)
  # print one line of blanks * " " and aster * "*"
  puts " " * blanks + "*" * aster + " " * blanks
end

diamond(91)