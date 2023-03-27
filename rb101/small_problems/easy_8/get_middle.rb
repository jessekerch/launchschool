def center_of(string)
  size = string.length
  middle = size / 2
  
  if size % 2 == 1
    string[middle]
  else
    string[middle - 1, 2]
  end
  
end

p center_of('I love ruby') == 'e'
p center_of('Launch School') == ' '
p center_of('Launch') == 'un'
p center_of('Launchschool') == 'hs'
p center_of('x') == 'x'