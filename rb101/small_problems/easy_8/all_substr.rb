def substrings(string)
  array = []
  str_size = string.size
  start = 0

  str_size.times do

    for i in 1..(str_size) do
      array << string[start, i]
    end

    start += 1
    str_size -= 1
  end  

  array
end

p substrings('abcde') == [
  'a', 'ab', 'abc', 'abcd', 'abcde',
  'b', 'bc', 'bcd', 'bcde',
  'c', 'cd', 'cde',
  'd', 'de',
  'e'
]