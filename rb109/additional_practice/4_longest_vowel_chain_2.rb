=begin
Problem:
find longest chain of vowels in input string
input: string
output: integer
rules:
input is all lowercase alpha
vowels are "aeiou"

Example:
codewarriors => o, e, a, io => 2

Data:
input: string
output: integer, longest count of vowels

Algo:
define method "solve" to take one param "str"
set "count" variable starting at 0
set "longest" variable starting at 0
set vowels = "aeiou"
iterate "idx" index from 0 to str size - 1
  if character at idx is included in vowels
    count + 1
    if count is longer than longest, longest = count
    else
      count = 0
    
return count

=end

def solve(str)
  vowels = "aeiou"
  longest = 0
  count = 0
  0.upto(str.size - 1) do |idx|
    if vowels.include?(str[idx])
      count += 1
      longest = count if count > longest
    else
      count = 0
    end
  end
  longest
end

p solve("codewarriors") == 2
p solve("suoidea") == 3
p solve("iuuvgheaae") == 4
p solve("ultrarevolutionariees") == 3
p solve("strengthlessnesses") == 1
p solve("cuboideonavicuare") == 2
p solve("chrononhotonthuooaos") == 5
p solve("iiihoovaeaaaoougjyaw") == 8
