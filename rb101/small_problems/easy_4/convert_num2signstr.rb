def signed_integer_to_string(int)
  sign = ''
  case int <=> 0
  when -1
     int *= -1
    sign = '-'
  when +1
    sign = '+'
  end
  int.digits.reverse.join.prepend(sign)
end

p signed_integer_to_string(4321) == '+4321'
p signed_integer_to_string(-123) == '-123'
p signed_integer_to_string(0) == '0'