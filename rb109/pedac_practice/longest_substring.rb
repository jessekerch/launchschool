=begin

Given a string s, find the length of the longest substring without repeating characters.

Problem:
input: string
output: integer, length of substring
rules:
input is lowercase alpha
input can be blank
substring output must be sequential and non repeating
repeated character breaks the substring
if blank string input, return blank (not zero)

Examples: 
aaaabbcba
a = 1
a -> break, next a a a
b -> it's different so start over at one
bb -> break, next 
c -> different, start over at one
b -> different, now up to 2
a -> different, now up to 3
end, return 3

Steps:
set prev_char variable to "" blank
set run to 0
iterate from 0 to length of string - 1 (index)
  check current letter (index) against prev_char
  if they're different
    change prev_char to current letter (index)
    add 1 to run
    if run > longest run, reassign longest run to run
  if they're the same
    reassign run to 0
=end

def length_of_longest_substring(string)
  prev_char = ""
  run = []
  longest = []
  0.upto(string.size - 1) do |idx|
    if string[idx] != prev_char
      prev_char = string[idx]
      run << string[idx]
      longest = run if run.uniq.count > longest.uniq.count
    else
      run = [string[idx]]
    end
  end
  longest.uniq.count == 0 ? '' : longest.uniq.count
end

p length_of_longest_substring('aaaabbcba') == 3
p length_of_longest_substring('aaaaaa') == 1
p length_of_longest_substring('pwwkea') == 4
p length_of_longest_substring('') == ''
p length_of_longest_substring('a') == 1
p length_of_longest_substring('robtuunopier') == 7
p length_of_longest_substring('tucccaassaa') == 3
p length_of_longest_substring('bbbbbbbbbba') == 2
