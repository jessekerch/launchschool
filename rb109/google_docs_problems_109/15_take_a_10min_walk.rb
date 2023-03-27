=begin

(https://www.codewars.com/kata/54da539698b8a2ad76000228/train/ruby)
6 kyu
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block in a direction and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
15. Take a Ten Minute Walk

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

Problem:
Receive walking directions from app, return true if directions will take 10min and return you to the same place
input: array of strings
output: boolean, true if valid, false otherwise
rules: 
input will always be valid, containing only n, s, e, w
each direction is one block, each block 1 min
input needs to be 10 characters or its invalid
needs to get me back to the same place

Example:
['n','s','n','s','n','s','n','s','n','s']
10 elements =>
vert 0 => true
horiz 0 => true

Data:
input: array of strings
output: boolean

Algo:
define method to take one param "arr"
return false if arr size not equal to 10
horiz = 0
vert = 0
iterate through the input array
when "n", vert + 1
when "s", vert - 1
when "e", horiz + 1
when "w", horiz - 1
return true if horiz and vert = 0

=end

def is_valid_walk(arr)
  return false if arr.size != 10
  horiz = 0
  vert = 0
  arr.each do |dir|
    case dir
    when "n" then vert += 1
    when "s" then vert -= 1
    when "e" then horiz += 1
    when "w" then horiz -= 1
    end
  end
  horiz == 0 && vert == 0
end

p is_valid_walk(['n','s','n','s','n','s','n','s','n','s']) == true
p is_valid_walk(['w','e','w','e','w','e','w','e','w','e','w','e']) == false
p is_valid_walk(['w']) == false
p is_valid_walk(['n','n','n','s','n','s','n','s','n','s']) == false
