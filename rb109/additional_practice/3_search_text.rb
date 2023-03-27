=begin

Problem:
find instances of search string in input string
input: string
output: integer

Example:
solution('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
solution('aaabbbcccc', 'bbb') # should return 1

Data:
input: string
output: integer
interm: array? probably not

Steps:
make variable "sets" to hold count of search text instances, start at 0
iterate from 0 up to full_text size - search_text size
(so for a 10 byte string and 3 byte check, I'll look from index 0 to index 7)
  if substring at current index, length search_text size, = search_text, add one to "sets"
return sets integer number

=end

# def solution(full_text, search_text)
#   sets = 0
#   full_text.chars.each_cons(search_text.size) { |a| sets += 1 if a.join == search_text }
#   sets
# end

def solution(full_text, search_text)
  sets = 0
  0.upto(full_text.size - search_text.size) do |idx|
    sets += 1 if full_text[idx, search_text.size] == search_text
  end
  sets
end

p solution('aaabbbcccc', 'bbb') == 1
p solution('abcdeb','b') == 2
p solution('abcdeb', 'a') == 1
p solution('abbc', 'bb') == 1