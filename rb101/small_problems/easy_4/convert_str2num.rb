DIGITS = { '0' => 0, '1' => 1, '2' => 2, '3' => 3, '4' => 4, '5' => 5,
              '6' => 6, '7' => 7, '8' => 8, '9' => 9, 'A' => 10, 'B' => 11,
              'C' => 12, 'D' => 13, 'E' => 14, 'F' => 15 }

def check_sign(str)
  first_digit = str.chars
  p first_digit[0]
end

def string_to_integer(str)

  sign = check_sign(str)
  
  digit_array = str.chars.map { |digit| DIGITS[digit] }

  sum = 0
  digit_array.each { |digit| sum = 10 * sum + digit }

  sum
end  

def hexadecimal_to_integer(str)
  digit_array = str.upcase.chars.map { |digit| DIGITS[digit] }
  sum = 0
  digit_array.each { |digit| sum = 16 * sum + digit }
  sum
end  


# ALG
# convert the string to an array of characters
# for each character
#   tell which digit string corresponds to which digit integer
#   convert string to integer
#   add up digits multiplied by power of 10 to get a sum

p string_to_integer('4321') == 4321
p string_to_integer('570') == 570

p hexadecimal_to_integer('4D9f') == 19871
p hexadecimal_to_integer('10E1') == 4321
