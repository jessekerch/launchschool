statement = "The Flintstones Rock" #== { "F"=>1, "R"=>1, "T"=>1, "c"=>1, "e"=>2, ... }
hash = {}

# uniq_char_array = statement.chars.uniq
# uniq_char_array.each do |char|
#   count = statement.count(char)
#   hash[char] = count
# end
# p hash

for char in ('A'..'z') do
  hash[char] = statement.count(char) if statement.count(char) > 0
end

p hash