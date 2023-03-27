# Return the number of Friday the 13ths in a given year.
# Year will be greater than 1752

# Ruby's Date class may be helpful here.
# Look at how to initialize a Date object
# Look at the friday? method

require 'date'

def friday_13th(year)
  fridays = 0
  Date.ordinal(year).leap? ? last_day = 366 : last_day = 365

  1.upto(last_day) do |day|
    if Date.ordinal(year,day).friday? && Date.ordinal(year,day).day == 13
      fridays += 1 
    end
  end
  
  fridays
end

p friday_13th(2015) == 3
p friday_13th(1986) == 1
p friday_13th(2019) == 2
p friday_13th(2000) == 1