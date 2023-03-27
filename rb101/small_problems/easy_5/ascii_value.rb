def ascii_value(str)
  value = 0
  for i in (0...str.length) do
    value += str[i].ord
  end
  value
end

#LS used str.each_char which will pass each character into a block
#Mine works but .each_char is more elegant and good to know the method

# Problem
# input: string object
# output: integer object
# rules: output is the sum of all ascii character values
#   - use String#ord to determine the ASCII value of a character
#   - #ord takes a string argument and returns an integer

# Examples

# Data Structures
# string input, integer output
# could use an array, but probably easier without

# Scratchpad
# .chars would give me an array
# string[index] will give me each character too

p ascii_value('Four score') == 984
p ascii_value('Launch School') == 1251
p ascii_value('a') == 97
p ascii_value('') == 0