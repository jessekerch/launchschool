=begin

Problem:
find instances of search string in input string
input: string
output: integer

Example:
solution('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
solution('aaabbbcccc', 'bbb') # should return 1

Data:
input: String
output: Integer

Algo:
define method solution to take one param "str"
set count variable to 0
iterate index from 0 up to str size - search size
  check substring of length search size from index
  if substring equals search text
    +1 to count

return count


=end

def solution(str, search)
  count = 0
  0.upto(str.size - search.size) do |idx|
    count += 1 if str[idx, search.size] == search
  end
  count
end

p solution('aaabbbcccc', 'bbb') == 1
p solution('abcdeb','b') == 2
p solution('abcdeb', 'a') == 1
p solution('abbc', 'bb') == 1