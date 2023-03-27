def crunch(string)
  output = ''
  index = 0
  while index < string.size
    output << string[index] unless string[index] == string[index + 1]
    index += 1
  end
  output
end

p crunch('ddaaiillyy ddoouubbllee') == 'daily double'
p crunch('4444abcabccba') == '4abcabcba'
p crunch('ggggggggggggggg') == 'g'
p crunch('a') == 'a'
p crunch('') == ''
