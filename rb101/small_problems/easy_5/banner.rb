def print_in_box(text)
  length = text.size + 2
  bar = '-' * length
  space = ' ' * length
  line_1 = '+' + bar + '+'
  line_2 = '|' + space + '|'
  line_3 = '| ' + text + ' |'

  puts line_1
  puts line_2
  puts line_3
  puts line_2
  puts line_1
end

print_in_box('To boldly go where no one has gone before.')
print_in_box('This is dope!')
# +--------------------------------------------+
# |                                            |
# | To boldly go where no one has gone before. |
# |                                            |
# +--------------------------------------------+

