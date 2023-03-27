# # Problem:
# # input: array, strings of 4 letters
# # output: "prints out groups of words that are anagrams"
# #   - array of words that are anagrams

# # Examples:
# # 'demo'

def output_anagrams(word_array)
  printed_arrays = []

  word_array.size.times do |index|  
    current_word = word_array[index]
    anagrams = []

    word_array.each do |word|
      anagrams << word if current_word.chars.sort == word.chars.sort
    end

    p anagrams unless printed_arrays.include?(anagrams)
    printed_arrays << anagrams unless printed_arrays.include?(anagrams)
  end
end

words =  ['demo', 'none', 'tied', 'evil', 'dome', 'mode', 'live',
          'fowl', 'veil', 'wolf', 'diet', 'vile', 'edit', 'tide',
          'flow', 'neon']

output_anagrams(words)

# LS Solution uses a hash: key is sorted word => values are all anagrams
#
# result = {}

# words.each do |word|
#   key = word.split('').sort.join
  
#   if result.has_key?(key)
#     result[key].push(word)
#   else
#     result[key] = [word]
#   end
# end

# result.each_value do |v|
#   puts "------"
#   p v
# end

