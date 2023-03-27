=begin
PEDAC
Problem

Create a custom set type.
How it works internally doesn't matter, as long as it behaves like a set
of unique elements that can be manipulated in several well defined ways.

All elements of this set will be numbers, for simplicity.

Example
A set can be like an Array type object
Add elements or check sets against other sets and return new sets

Data
Use Array object to hold Integers and adjust set as needed

Algo
Custom class
constructor
input: array

method: contains (num to check)
return boolean

method: subset? (set to check if self if all nums are included)
return boolean

method: disjoint? (set to check if NO nums are included)
* empty set is disjoint of anything, none of its nums are included
return boolean

method: eql? (set to check if all nums are same, count not important)
return boolean

method: add (num to add to set array)
return new set with addition

method: intersection (set to check any shared nums)
* return new set of only shared nums

method: difference (set to check any NOT shared nums)
* return new set of only uncommon nums

method: union (set to check any nums in either)
* return new set of nums in either, don't duplicate
=end

class CustomSet
  def initialize(array=[])
    @nums = array.uniq
  end

  def empty?
    @nums.empty?
  end

  def contains?(num)
    @nums.include?(num)
  end

  def subset?(other_set)
    @nums.all? { |num| other_set.nums.include?(num) }
  end

  def disjoint?(other_set)
    @nums.none? { |num| other_set.nums.include?(num) }
  end

  def eql?(other_set)
    @nums.sort == other_set.nums.sort
  end

  def ==(other_set)
    @nums.sort == other_set.nums.sort
  end

  def add(num)
    CustomSet.new(@nums.push(num))
  end

  def intersection(other_set)
    new_array = @nums.select { |num| other_set.nums.include?(num) }
    CustomSet.new(new_array)
  end

  def difference(other_set)
    new_array = @nums.select { |num| !other_set.nums.include?(num) }
    CustomSet.new(new_array)
  end

  def union(other_set)
    new_array = @nums + other_set.nums
    CustomSet.new(new_array.uniq)
  end

  protected

  attr_reader :nums
end
