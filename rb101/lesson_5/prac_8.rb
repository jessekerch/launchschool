hsh = {first: ['the', 'quick'], second: ['brown', 'fox'], third: ['jumped'],
fourth: ['over', 'the', 'lazy', 'dog']}

hsh.each do |key, array|
  array.each do |string|
    string.each_char { |char| puts char if 'aeiou'.include?(char) }
  end
end
