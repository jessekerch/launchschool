# Write a method that takes a floating point number that represents
# an angle between 0 and 360 degrees and returns a String that represents
# that angle in degrees, minutes and seconds. You should use a degree
# symbol (°) to represent degrees, a single quote (') to represent minutes,
# and a double quote (") to represent seconds. A degree has 60 minutes,
# while a minute has 60 seconds.

# Problem
# input: Float, 0 to 360 representing an angle
# output: String, same angle but in degrees, minutes, and seconds
# rules:
# - Input is always positive, some with digits after decimal and some without
# - Input can be 0
# - A degree has 60 minutes, and a minute has 60 seconds
# - 360˚ == 0˚

# Examples: 
# 1. input 30, same as before the decimal
# - output: 30˚ and nothing after the decimal so 00' and 00"

# 2. input 76.73
# - output: 76˚, same as before the decimal
# - 0.73 degrees equates to 43' and 48"
# - 0.73 * 60 = 43.8, so keep the 43'
# - 0.80 * 60 = 48, so 48"

# 3. input 254.6
# - output 254˚ for starters, with 0.60 left
# - 0.60 * 60 = 36', and nothing left but
# - 0.00 * 60 = 00" and mult by zero is fine 
 
# 6. look at the last one, input 360
# - output 360˚
# - output 0.00 * 60 = 0'
# - output 0.00 * 60 = 0"
 
# ALGORITHM
# - define method dms which takes one argument, a float
# - capture digits in front of the decimal and save as degrees
#   - should be able to do this by converting float to integer (test!) 
# - capture digits after decimal in minutes variable to represent minutes
#   - should be remainder of float - integer version
# - return a string with degrees, minutes, and seconds converted to strings
#   - should be able to print the three variables one after another with ˚, ', "
 
# CODING
DEGREE = "\xC2\xB0"

def dms(flt)
  angle = ""
  int = flt.to_i
  angle << int.to_s + DEGREE
  min_f = (flt - int) * 60
  min = min_f.to_i
  sec_f = (min_f - min) * 60
  angle << "%02d" % min + "'"
  sec = "%02d" % sec_f.to_i
  angle << "%02d" % sec + '"'
  p angle
end

 # Examples:

p dms(30) == %(30°00'00")
p dms(76.73) == %(76°43'48")
p dms(254.6) == %(254°36'00")
p dms(93.034773) == %(93°02'05")
p dms(0) == %(0°00'00")
p dms(360) == %(360°00'00") || dms(360) == %(0°00'00")