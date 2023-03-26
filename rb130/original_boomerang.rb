=begin
PEDAC
Problem
Write a program that deals with "Boomerang" arrays
rules:
  Boomerang arrays consist of a sequence of increasing numbers
    followed by a sequence of decreasing numbers
  or, a sequence of decreasing numbers
    followed by a sequence of increasing numbers
Implicit:
All array elements are integers, numbers
All boomerang arrays are odd number of elements
"Edges" or 1st and last elements dont' need to be the same
Middle element is the "elbow" where it changes direction
return false if: One element is not a boomerage

Example
[4, 2, 0, 2, 4] is a boomerang array

5 / 2 = 2, so index 2 is the elbow
WRONG => elbow is where it changes direction

The first pair 4 > 2 so we're looking at decreasing
First half: 4 > 2, 2 > 0 => true
Second half (opposite): 0 < 2, 2 < 4 => true

[0, 1, 2, 3, 2, 1, 0] is also a boomerang array
7 / 2 is 3, so index 3 is the elbow
First pair is 0 > 1 so we're looking at increasing
First half: 0 < 1, 1 < 2, 2 < 3
Second half: 3 > 2, 2 > 1, 1 > 0
return true (or basically I didn't return false)

Data:
Boomerang class
no constructor

class method: boomerang?
input: one argument, Array object with Integer object numbers as elements
return boolean true or false if it's a boomerang or not

Algo:
Boomerang class
boomerang? class method
input: Array object, "array"

if the array is empty or just one element, return false
if the array is an even number of elements, return false

set "elbow" to array size divided by 2, this is the middle

first_half 
=> if the first pair is increasing, send array half to increasing? 
=> if the first pair is decreasing, send array half to decreasing? 
return true or false

second_half 
=> if the first pair is increasing, send array half to increasing?
=> if the first pair is decreasing, send array half to decreasing?
return true or false

increasing? takes an array
for each consecutive two elements, check if they are increasing
first element should be < second element, otherwise return false

decreasing? takes an array
for each consecutive two elements, check if they are decreasing
first element should be > second element, otherwise return false

return true

Code
=end

class Boomerang
  def self.boomerang?(array)
    return false if invalid?(array)

    elbow = find_elbow(array)
    direction = array[0] < array[1] ? 'increasing' : 'decreasing'

    if direction == 'increasing'
      return false unless increasing?(array[0..elbow])
      return false unless decreasing?(array[elbow..-1])
    elsif direction == 'decreasing'
      return false unless decreasing?(array[0..elbow])
      return false unless increasing?(array[elbow..-1])
    end

    true
  end

  def self.invalid?(arr)
    return true if arr.size < 2
    return true if arr.size.even?
  end

  def self.increasing?(arr)
    arr.each_cons(2) do |first, second|
      return false unless first < second
    end
    true
  end

  def self.decreasing?(arr)
    arr.each_cons(2) do |first, second|
      return false unless first > second
    end
    true
  end

  def self.find_elbow(arr)
    if arr[0] < arr[1]
      elbow_num = arr.max
    else
      elbow_num = arr.min
    end
    arr.index(elbow_num)
  end
end
