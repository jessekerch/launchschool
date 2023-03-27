# The time of day can be represented as the number of minutes before or after midnight.
# If the number of minutes is positive, the time is after midnight.
# If the number of minutes is negative, the time is before midnight.

# Write a method that takes a time using this minute-based format
# and returns the time of day in 24 hour format (hh:mm).
# Your method should work with any integer input.

# You may not use ruby's Date and Time classes.

# Scratchpad:
# There are 1440 minutes in a day.
# If the integer.abs is > 1440, I should use the mod remainder
# Use #abs on the integer to check absolute value

# If number is negative, take the remainder of sub from 1440

# Then just mod the integer by 60 and that's the hours
# the remainder is the minutes

# So -3 would get me 1437 after midnight 
# 1437 / 60 is 23, so that's the hours
# 1437 % 60 is 57, so that's the minutes

def time_of_day(number)
  number %= 1440
  "%02d" % [number / 60] + ":" + "%02d" % [number % 60]
end

p time_of_day(0) == "00:00"
p time_of_day(-3) == "23:57"
p time_of_day(35) == "00:35"
p time_of_day(-1437) == "00:03"
p time_of_day(3000) == "02:00"
p time_of_day(800) == "13:20"
p time_of_day(-4231) == "01:29"