=begin
PEDAC

Problem
Write a program that generates random robot names such as RX837 or BC811.
If name is wiped, next time you ask, it will respond with a new random name.
The names must be random; no predictable sequence
Each name only once

input: NONE
output: NONE

Just create new Robot class instances with unique names
Need a "name" getter method

Example
Create two Robot objects
Each Robot will be born with a name: two cap letters and 3 numbers 0 to 9
Use name getter method to check each name and make sure Strings are not ==

Data
No input or output per se
Name should be a String object with 2 x A-Z and 3 x 0-9

Algo

Robot class
class variable: robot_names

method: constructor
instance variable: name
    generate name from helper method
    repeat if name is already in robot_names
    add name to robot_names

method: name, getter method

method: name_generator
    name = blank String
    LETTERS = 'A'..'Z' array
    NUMBERS = '0'..'9' array
    2.times add a sample from LETTERS to name
    3.times add a sample from NUMBERS to name
    return name

Code
=end

class Robot
  LETTERS = ('A'..'Z').to_a
  NUMBERS = ('0'..'9').to_a
  @@robot_names = []

  def initialize
    @name = name_generator
    @@robot_names << @name
  end

  def reset
    @@robot_names.delete(@name)
    @name = nil
  end

  def name
    if @name.nil?
      @name = name_generator
      @@robot_names << @name
    end
    @name
  end

  private

  def name_generator
    name = ''
    loop do
      2.times { name << LETTERS.sample }
      3.times { name << NUMBERS.sample }
      break unless @@robot_names.include?(name)
      name = ''
    end
    name
  end
end

wallee = Robot.new
puts wallee.name
wallee.reset
puts wallee.name
