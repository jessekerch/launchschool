# PEDAC
# Problem
# Write a program that deals with "Boomerang" arrays
# rules:
#   Boomerang arrays consist of a sequence of increasing numbers
#     followed by a sequence of decreasing numbers
#   or, a sequence of decreasing numbers
#     followed by a sequence of increasing numbers
# Implicit:
# All array elements are integers, numbers
# All boomerang arrays are odd number of elements
# "Edges" or 1st and last elements dont' need to be the same
# Middle element is the "elbow" where it changes direction
# return false if: One element is not a boomerage

# Example
# [4, 2, 0, 2, 4] is a boomerang array

# 5 / 2 = 2, so index 2 is the elbow
# WRONG => elbow is where it changes direction
# This changes direction at 0, or index 3

# The first pair 4 > 2 so we're looking at decreasing
# First half: 4 > 2, 2 > 0 => true
# Second half (opposite): 0 < 2, 2 < 4 => true

# Data:
# Boomerang class
# no constructor

# class method: boomerang?
# input: one argument, Array object with Integer object numbers as elements
# return boolean true or false if it's a boomerang or not

# Algo:
# Boomerang class
# boomerang? class method
# input: Array object, "array"

# helper method invalid?
#   if the array is empty or just one element, return false
#   if the array is an even number of elements, return false

# set "elbow" with helper method
#   if first two numbers are increasing, elbow is the max number
#   if first two numbers are decreasing, elbow is the min number

# first_half
# => if the first pair is increasing, send array half to increasing?
# => if the first pair is decreasing, send array half to decreasing?

# second_half
# => if the first pair is increasing, send array half to increasing?
# => if the first pair is decreasing, send array half to decreasing?

# increasing? takes an array
# for each consecutive two elements, check if they are increasing
# first element should be < second element, otherwise return false

# decreasing? takes an array
# for each consecutive two elements, check if they are decreasing
# first element should be > second element, otherwise return false

# return true unless false has already been returned

class Boomerang
  def self.boomerang?(array)
    return false if invalid?(array)

    elbow = find_elbow(array)
    if array[0] < array[1]
      return false unless increasing?(array[0..elbow])
      return false unless decreasing?(array[elbow..-1])
    else
      return false unless decreasing?(array[0..elbow])
      return false unless increasing?(array[elbow..-1])
    end

    true
  end

  class << self
    private

    def invalid?(arr)
      return true if arr.size < 2
      return true if arr.size.even?
    end

    def increasing?(arr)
      arr.each_cons(2) do |first, second|
        return false unless first < second
      end
      true
    end

    def decreasing?(arr)
      arr.each_cons(2) do |first, second|
        return false unless first > second
      end
      true
    end

    def find_elbow(arr)
      elbow_num = arr[0] < arr[1] ? arr.max : arr.min
      arr.index(elbow_num)
    end
  end
end