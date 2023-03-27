def rotate_array(arr)
  arr[1..-1] << arr[0]
end

def rotate_rightmost_digits(number, n)
  array = number.digits.reverse
  new_array = array.pop(n)
  array += rotate_array(new_array)
  array.join.to_i
end

def max_rotation(number)
  digits = number.digits.size

  digits.downto(2) do |n|
    number = rotate_rightmost_digits(number, n)
  end

  number
end

p max_rotation(735291) == 321579
p max_rotation(3) == 3
p max_rotation(35) == 53
p max_rotation(105) == 15 # the leading zero gets dropped
p max_rotation(8_703_529_146) == 7_321_609_845