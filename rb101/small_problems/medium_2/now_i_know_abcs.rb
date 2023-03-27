=begin
Problem:
- Input: string
- Output: boolean, true or false
- Rules: case insensitive
  - can only use one side of a block or the other
  - all letters in examples are on the blocks somewhere

Examples: 
B -> block 1, side 1
A -> block 5, side 2
T -> block 6, side 2
C -> block 4, side 1
H -> block 10, side 1
=> true. None of the same blocks appear, with opposing sides.
Can I translate the letters into numbers representing blocks and sizes?
Then compare block and sizes to make sure there are no conflicts?

B -> block 1, side 1
U -> block 10, side 2
T -> block 6, side 2
C -> block 4, side 1
H -> block 10, side 1
=> false. The same block appears twice, no good.
Actually, it doesn't matter what side they're on. I also only have one of each letter, so even a AA would make it false.

So just check the block, and any duplicates will make it false.

Data Structures:
- input structure: string
- output structure: boolean
- intermediate steps: nested array to hold blocks, by index number

Algorithm
- initialize variable can_spell to true, which will be returned unless proven false
- generate a nested array for the letter blocks (%w(xx, xx, etc))
- iterate through letter blocks array, checking index 1 and then index 2
- if side 1 letter is contained in the string, check side 2
  - if side 2 is also contained in the string, return false
  - if one or neither index is included in the string, move to next iteration
- return can_spell

Code
=end

BLOCKS = %w(BO XK DQ CP NA GT RE FS JW HU VI LY ZM)

def block_word?(string)
  string.upcase!

  # return false if any letter appears more than once
  return false if string.chars.uniq.join != string

  BLOCKS.each do |block|
    # return false if any block is used twice
    return false if string.include?(block[0]) && string.include?(block[1])
  end

  true # return true unless false was already explicitly returned
end


p block_word?('batch') == true
p block_word?('BUTCH') == false
p block_word?('jest') == true
p block_word?('jesse') == false
p block_word?('Spencer') == false

