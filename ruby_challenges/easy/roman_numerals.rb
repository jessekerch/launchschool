=begin
Problem
  input: integer, decimal number
  outpoint: string, roman numeral
  rules: 
    Just convert it, no invalid numbers or anything
    Input should be less than 3000
    {1 => 'I', 5 => 'V', 10 => 'X', 50 => 'L', 100 => 'C', 500 => 'D', 1000 => 'M'}

Example
  3 = III
  4 = IV
  11 = XI
  
Data
  input: integer
  output: string
  interm?
    hash to hold decimal to roman conversion
    array to hold numbers to convert after breaking down decimal into workable parts
  
Algo
  set numbers to empty array []
  divis = 10
  input integer is called "num"
  while num > 0 loop
    num % divis
    divis * 10

Code

=end

# class RomanNumerals
#   attr_reader :decimal

#   def initialize(decimal)
#     @decimal = decimal
#   end
  
#   def to_roman
#      
#   end
# end


# num = 2908
# divis = 10
# dec_array = []
# while num > 0 do
#   x = num % divis
#   num -= x
#   dec_array << x
#   divis *= 10
# end
# p num
# rom_array = []
# divis = 10
# dec_array.each do |n|
#   (n / divis).times do 
#     rom_array << hash[n / divis]
#   else
#     # 300
    
#     end
#   end
#   divis *= 10
# end
# puts rom_array.reverse.join


class RomanNumeral
  ROMAN_NUMS = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  VALUES = {'I' => 1, 'IV' => 4, 'V' => 5, 'IX' => 9, 'X' => 10, 'XL' => 40, 'L' => 50, 'XC' => 90, 'C' => 100, 'CD' => 400, 'D' => 500, 'CM' => 900, 'M' => 1000}

  def initialize(num)
    @num = num
  end
  
  def to_roman
    to_convert = @num
    answer = ''
    ROMAN_NUMS.each do |current|
      while to_convert >= VALUES[current] do
        answer << current
        to_convert -= VALUES[current]
      end
    end
    answer
  end
  
end


# p RomanNumeral.new(1).to_roman
