=begin
PEDAC
Problem

Construct objects that represent a meetup date.
Each object takes a month number (1-12) and a year (e.g., 2021).
Your object determines the exact date of the meeting.
If you ask 2nd Wednesday of May 2021, the object knows its 12th of May, 2021.
Input is Not case sensitive

Input:
'first', 'second', 'third', 'fourth', 'fifth', 'last', 'teenth'
'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'

Example:
first_monday_of_march_2013
meetup = Meetup.new(2013, 3)
meetup.day('Monday', 'first')

Data:
Meetup class

constructor method
input: Integer, month (1-12)
input: Integer, year (2013, e.g.)

day method
input: String, day of the week like 'Monday'
input: String, descriptor like 'first' or 'teenth'

day_of_week helper method
determine day of the week method to use (.monday?)

descriptor helper method
determine which date index to match descriptor ('first' = 1)

Algo
create a Meetup object
constructor method takes month and year as input
assign month and year to Meetup state

create a day method
input is two strings: day and descriptor
helper method >> get Array of dates matching "day" in that month and year
helper method >> get date of 'descriptor' from array of dates in month/year
return new Date object with year, month, day

create a days_in_month method
input: month, year, "day"
return: Array of dates matching "day" in month and year

create a specific_day method
input: array of integer dates, year, month, and descriptor
output: Integer, date matching descriptor from the array in the month/year

=end

require 'date'

class Meetup
  def initialize(year, month)
    @year = year
    @month = month
  end

  def day(day, descriptor)
    day = day.capitalize
    descriptor = descriptor.downcase

    array = days_in_month(day)
    date = array[day_index(array, descriptor)]

    date.nil? ? nil : Date.civil(@year, @month, date)
  end

  def days_in_month(day_of_week)
    last_day = Date.new(@year, @month, -1).day
    arr = (1..last_day).to_a
    arr.select { |d| Date.new(@year, @month, d).strftime("%A") == day_of_week }
  end

  def day_index(array, descriptor)
    day_index_hash = { 'first' => 0, 'second' => 1, 'third' => 2, 'fourth' => 3,
                       'fifth' => 4, 'last' => -1, 'teenth' => teenth(array) }
    day_index_hash[descriptor]
  end

  def teenth(array)
    array.find_index { |date| (13..19).include?(date) }
  end
end
