# a method that takes an array of integers,
# and returns a new array with every other element from the original array, starting with the first element.

# SET array = an array of integers
# SET iterator = 0
# SET newarray = the first element in the array (array[0])
# WHILE iterator < number of elements in the array
#   iterator = iterator + 1   (I had to move this above next or it kept looping)
#   IF current_number is odd
#     go to the next iteration
#   ELSE
#     newarray << current_number
# PRINT newarray

def everyOther(array)
  iterator = 0
  newarray = []
  newarray << array[0]
  
  while iterator < array.length do
    iterator += 1
#    puts iterator.inspect       # OK to remove, used for testing
    if iterator.odd?
      next
    else 
      newarray << array[iterator]
    end 
  end 

newarray
end

integers = [0, 1, 2, 3, 4, 5, 6, 7, 8] 
p everyOther(integers)

