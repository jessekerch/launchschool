=begin
Problem
constructor
input: String, consectuive numbers string

method: slices
input: Integer, number of digits to slice up
output: Array of Arrays, slices of consective numbers
interm: ? nah

Example
"01234", 3 => [[0, 1, 2], [1, 2, 3], [2, 3, 4]]

Algo
Series class
constructor
input is "numbers"

method: slices
input is "digits"
array is "array", set to empty array
index = 0
loop while index < numbers - digits
  add numbers[index, digits] to array
  + 1 to index
end loop
return array

=end


class Series
  def initialize(numbers)
    @numbers = numbers
  end
  
  def slices(digits)
    array = []
    index = 0
    raise(ArgumentError, "That's too many digits.") if digits > @numbers.size
    while index <= (@numbers.size - digits) do
      array << @numbers[index, digits].chars.map(&:to_i)
      index += 1
    end
    array
  end
end

# p Series.new("01234").slices(5)
