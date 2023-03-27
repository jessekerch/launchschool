def str_palindrome?(string)
  string == string.reverse
end

p str_palindrome?('madam') == true
p str_palindrome?('Madam') == false          # (case matters)
p str_palindrome?("madam i'm adam") == false # (all characters matter)
p str_palindrome?('356653') == true

def arr_palindrome?(array)
  array.flatten == array.flatten.reverse
end

p arr_palindrome?([1, 2, 2, 1]) == true
p arr_palindrome?([1, 2, 3, 4]) == false
p arr_palindrome?([[1, 2], 1, [2, 1]]) == true

