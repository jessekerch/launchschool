# a method that determines the index of the 3rd occurrence of a given character in a string
# For instance, if the given character is 'x' and the string is 'axbxcdxex', the method should return 6 (the index of the 3rd 'x')
# If the given character does not occur at least 3 times, return nil

# SET char = given character
# SET string = string to iterate over
# SET index = index iterator start at 0
# SET count = number of times given character occurs
#
# WHILE index < number of characters in string AND count < 3
#   IF string[index] is the same as char
#     count += 1
#     index += 1  (unless count is already 3, otherwise you'll lose your spot)
#   ELSE
#     index += 1
#     next 
# 
#   IF count == 0
#     PRINT nil
#   ELSE 
#     PRINT index

def third_time(character, string)
  index = 0
  count = 0
  while index < string.length && count < 3
  if string[index] == character
      count += 1
      unless count >= 3
        index += 1
      end 
    else 
      index += 1
      next
    end 
  end
  
  if count < 3
    nil
  else
    index
  end
end

p third_time('b', 'axbxcdxex')