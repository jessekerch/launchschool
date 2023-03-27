def longest_sentence(text)
  lengths = []
  sentences = text.split(/\.|\?|!/)
  longest = sentences.sort_by { |sentence| sentence.size }.last + '."'
  size = longest.split(' ').size
  return longest, size
end  

file_data = File.read("pg84.txt")
puts longest_sentence(file_data)[0]
puts "=> Has #{longest_sentence(file_data)[1]} words."