=begin
Problem:
find longest chain of vowels in input string
input: string
output: integer

Example:
codewarriors => o, e, a, io => 2

Data:
input: string
output: integer

Steps:
initiate "vowels" string to "aeiou"
initiate "longest" integer variable to 0
initiate "current" integer to 0
iterate "index" from 0 up to string size - 1
  if substring at index is included in vowels
    current + 1
    longest = current if current > longest
  else 
    current = 0
    
return "longest" integer variable 

=end


def solve(str)
  vowels = "aeiou"
  longest = 0
  current = 0
  0.upto(str.size - 1) do |idx|
    if vowels.include?(str[idx])
      current += 1
      longest = current if current > longest
    else
      current = 0
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
