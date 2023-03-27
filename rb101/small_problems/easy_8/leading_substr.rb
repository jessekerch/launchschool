def leading_substrings(string)
  array = []
  for i in 1..(string.length) do
    array << string[0, i]
  end
  array
end

p leading_substrings('abc') == ['a', 'ab', 'abc']
p leading_substrings('a') == ['a']
p leading_substrings('xyzzy') == ['x', 'xy', 'xyz', 'xyzz', 'xyzzy']
