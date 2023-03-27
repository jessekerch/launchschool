# Jesse Kercheval
# May 18, 2022
# RB100 Ruby Basics exercises

daylight = [true, false].sample

def time_of_day(light)
  if light
    puts "It's daytime!"
  else
    puts "It's nighttime!"
  end 
end 

time_of_day(daylight)
