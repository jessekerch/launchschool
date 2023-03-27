DIGITS = { '0' => 0, '1' => 1, '2' => 2, '3' => 3, '4' => 4, '5' => 5,
              '6' => 6, '7' => 7, '8' => 8, '9' => 9 }

def string_to_signed_integer(str)

  str.chars[0] == "-" ? sign = -1 : sign = 1

  str.gsub!(/[+-]/, '')

  digit_array = str.chars.map { |digit| DIGITS[digit] }

  sum = 0
  digit_array.each { |digit| sum = 10 * sum + digit }

  sum * sign
end

p string_to_signed_integer('4321') == 4321
p string_to_signed_integer('-570') == -570
p string_to_signed_integer('+100') == 100
p string_to_signed_integer('0') == 0
p string_to_signed_integer('-235612') == -235612
p string_to_signed_integer('+3400000') == 3400000