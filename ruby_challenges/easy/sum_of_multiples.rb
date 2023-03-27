=begin
Problem
input:
  1. for #to method: Integer, "number"
  2. for new Sum object: Array, "num_set"
output: Integer, "sum" of multiples
rules: 
  add up numbers from 1 to number (not incl number) which are divisible by any of the num_set array
  new instance of SumOfMultiples will take an Array
  #to instance method takes a number and uses the instance's array
  #to class method takes a number and uses [3, 5]
  
Example:
  20, [3, 5]
  3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 => 78

Data:
method input: Integer (default to [3, 5] for class method)
object input: Array
output: Integer, sum of multiples
interm: nah

Algo:
input number is "number"
"sum" = 0
iterate "n" from 1 up to number - 1
  iterate through array for each 'divis'
    if n % divis == 0
      sum += n
return sum

Code
=end
class SumOfMultiples
  def initialize(*divs)
    @arr = divs
  end
  
  def self.to(number)
    SumOfMultiples.new(3, 5).to(number)
  end
  
  def to(number)
    multiples = (1...number).to_a.select do |n|
      @arr.any? do |div|
        n % div == 0
      end
    end
    multiples.sum
  end
end

p SumOfMultiples.to(20)