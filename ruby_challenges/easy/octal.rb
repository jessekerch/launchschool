=begin
Problem
input: String, octal
output: Integer, decimal
rules:
  multiply digits (in reverse) by incremental factors of 8
  9 would be invalid, there are no 9's
  abc's would be invalid
  anything other than 0-8 would be invalid

Example
233 => 3, 3, 2 => 3*8**0 + 3*8**1 + 3*8**2 => 155

Data
input: string, octal number
output: integer, decimal number
interm: turn octal string into integer
use array for digits of octal 

Algo:
if octal string contains any character other than 0-9, return 0
turn octal string into integer, and then array of digits
set decimal = 0
set factor to 0
iterate through each "num" of array
  decimal += (num * 8 ** factor)
  factor += 1
return decimal

Code
=end

class Octal
  def initialize(oct_str)
    if oct_str =~ /[^0-8]/ || oct_str.to_i == 8
      @oct_num = 0
    else
      @oct_num = oct_str
    end
  end
  
  def to_decimal
    dec_num = 0
    factor = 0
    digits = @oct_num.to_i.digits
    # turn octal digits into decimal
    digits.each do |n|
      dec_num += n * 8 ** factor
      factor += 1
    end
    dec_num
  end
end

p Octal.new('233').to_decimal

