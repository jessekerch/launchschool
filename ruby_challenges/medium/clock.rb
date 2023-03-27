=begin
PEDAC
Problem
Create a clock that is independent of date.
Add or subtract minutes from a given Clock object.
Don't mutate the Clock ,return a new Clock object
Two clock objects with same time should be equal (==)
No built-in date or time functionality
rules
  Military time: 13:01, etc.
  Don't mutate caller with - or +
  == compares time, not object_id
  no errors for invalid input

Example

Data
Clock class
at method, that takes an hour input, or a second input for minutes
+ method that takes one argument and adds minutes to clock time,
adjust hours for more than 60min
  *WRAP around midnight as needed
- method that takes one argument and subtracts minutes from clock time,
adjust hours if more than 60min
  *WRAP around midnight as needed
to_s method that outputs time in String format '00:00'
== method to show clocks equal to each other if they show the same time

Algo
Make a Clock class

constructor method: (hours and minutes as arguments)
  hours instance variable, Integer
  minutes instance variable, Integer

class method: at (one argument, or two)
  input: Integer, o'clock hours, always 0-24
  optional input: Integer, o'clock minutes, always 0-60

method: -
  input: Integer, minutes to subtract
  subtract minutes from time
  subtract hours if needed for each 60 minutes
  wrap around to next day if needed (< 00:00)

method: +
  input: Integer, minutes to add
  add minutes to time
  add hours if needed for each 60 minutes
  wrap around to next day if needed (> 24:00)

method: to_s
  output time in "00:00" format as String

method: ==
  return whether time of two different Clock objects is the same

Code
=end

class Clock
  attr_accessor :hours, :minutes

  def initialize(hours, minutes)
    @hours = hours
    @minutes = minutes
  end

  def self.at(hours, minutes=0)
    new(hours, minutes)
  end

  def +(num)
    new_clock = Clock.at(@hours, @minutes + num)
    new_clock.adjust_minutes
    new_clock.adjust_hours
    new_clock
  end

  def -(num)
    new_clock = Clock.at(@hours, @minutes - num)
    new_clock.adjust_minutes
    new_clock.adjust_hours
    new_clock
  end

  def adjust_minutes
    while @minutes > 59
      @minutes -= 60
      @hours += 1
    end
    while @minutes < 0
      @minutes += 60
      @hours -= 1
    end
  end

  def adjust_hours
    while @hours > 23
      @hours -= 24
    end
    while @hours < 0
      @hours += 24
    end
  end

  def to_s
    "#{format('%02d', @hours)}:#{format('%02d', @minutes)}"
  end

  def ==(other)
    to_s == other.to_s
  end
end
