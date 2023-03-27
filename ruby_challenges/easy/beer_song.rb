=begin
Problem
write instance method verse which takes one argument Integer and outputs two lines, strings, of that number of bottles and one less
write instance method verses which calls verse once for each argument given
write class method lyrics which does the whole thing from 99 to 0

Examples

BeerSong.verse(99) => 
"99 bottles of beer on the wall, 99 bottles of beer.\n" \
"Take one down and pass it around, 98 bottles of beer on the wall.\n"
    
BeerSong.verse(0) => 
"No more bottles of beer on the wall, no more bottles of beer.\n" \
"Go to the store and buy some more, 99 bottles of beer on the wall.\n"

Data
Integer to track verse line, String returned. Think that's it?
Do I need an Array to keep verses before returning at once?

Algo
constructor
iranaikana?

method: verse (class method)
VERSE is the input Integer
if VERSE is > 0
  output "VERSE bottles of beer on the wall, VERSE bottles of beer.\n"
  output "Take one down and pass it around, VERSE-1 bottles of beer on the wall.\n"
if VERSE is 0
  output "No more bottles of beer on the wall, no more bottles of beer.\n"
  output "Go to the store and buy some more, 99 bottles of beer on the wall.\n"

method: verses (class method)
  call verse method with whatever arguments are passed  

method: lyrics (class method)
  call verses method 100x from 99 down to 0

Code
=end

class BeerSong
  @@string = []
  
  def self.verse(num)
    if num == 0
      "No more bottles of beer on the wall, no more bottles of beer.\n" +
      "Go to the store and buy some more, 99 bottles of beer on the wall.\n"
    elsif num == 2
      "2 bottles of beer on the wall, 2 bottles of beer.\n" +
      "Take one down and pass it around, 1 bottle of beer on the wall.\n"
    elsif num == 1
      "1 bottle of beer on the wall, 1 bottle of beer.\n" +
      "Take it down and pass it around, no more bottles of beer on the wall.\n"
    else
      "#{num} bottles of beer on the wall, #{num} bottles of beer.\n" +
      "Take one down and pass it around, #{num - 1} bottles of beer on the wall.\n"
    end
  end
  
  def self.verses(start, stop)
    num = start
    loop do
      @@string << self.verse(num)
      break if num == stop
      num -= 1
    end
    @@string.join("\n")
  end
  
  def self.lyrics
    self.verses(99, 0)
  end
  
end

# puts BeerSong.verses(2, 0)