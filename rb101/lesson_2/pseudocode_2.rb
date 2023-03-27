# a method that takes an array of strings,
# and returns a string that is all those strings concatenated together 

# SET array = an array of strings
# SET string = each string in the array
# SET together = concatenation of all of the strings in the array
# SET iterator = 1

# WHILE iterator <= number of strings in the array  (I'll just use each for this...)
# ADD string to together

# PRINT together

array = ["this", "is", "an", "array", "of", "strings", "with", "no", "spaces"]
together = ""
array.each { |string| together << string }
puts together


