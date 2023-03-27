=begin

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

NOTE: a valid prefix is greater than 1 character in length.


examples:

Problem:
input: array of string objects
output: string

Examples:
ho -> yes  [ho]
hom -> no
home -> no
[ho] = longest = "ho"

Data:
input: array
output: string
intermediate: array of strings

Steps:
longest = ""
find shortest string in array
check each substring from start (only prefix)
if they are also included in the other strings
  if longer than longest, make longest
return longest

=end

def longest_common_prefix(array)
  longest = ""
  options = []
  array.sort!.reverse!
  shortest = array.pop
  shortest.size.downto(2) do |size|
    array.each do |str|
      if str.include?(shortest[0, size]) && shortest[0, size].size > longest.size
        options << shortest[0, size]
      end
    end
  end
  options.sort!.reverse!
  common = []
  options.each do |substr|
    okay = true
    array.each do |word|
      okay = false unless word.include?(substr)
    common << substr if okay 
    end
  end
  common.max
end

p longest_common_prefix(["house", "home", "hotel"]) #== "ho"
p longest_common_prefix(["abc", "def", "hij"]) #== ""
p longest_common_prefix(["flower","flow","flight"]) #== "fl"
p longest_common_prefix(["absolute", "abstract" "absent"]) #== "abs"
p longest_common_prefix(["metal", "metallurgy","metamorphosis"]) #== "meta"
p longest_common_prefix(["dog","racecar","car"]) #== ""
p longest_common_prefix(["aabcd", "aacde", "bdsa"]) #== ""
