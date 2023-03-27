def swap(string)
  new_string = []

  string.split.map do |word|
    word[0], word[-1] = word[-1], word[0]
    new_string << word
  end

  new_string.join(' ')
end

p swap('Oh what a wonderful day it is') == 'hO thaw a londerfuw yad ti si'
p swap('Abcde') == 'ebcdA'
p swap('a') == 'a'
