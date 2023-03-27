=begin
Problem
Make a hollow diamond of capital letters from A to Letter given as input
input: String, capital letter
output: String, lines of letters and whitespace to create a diamond

Example
'______A______'
'_____B_B_____'
'____C___C____'
'___D_____D___'
'__E_______E__'
'_F_________F_'
'__E_______E__'
'___D_____D___'
'____C___C____'
'_____B_B_____'
'______A______'

0 A => 0 => 1 total
1 B => 1 => 3 total
2 C => 3 => 5 total
3 D => 5 => 7 total
4 E => 7 => 9 total
5 F => 9 => 11 total
4 E => 7 => 9 total
3 D => 5 => 7 total
2 C => 3 => 5 total
1 B => 1 => 3 total
0 A => 0 => 1 total

Data
String input
1 x String object output with cap letters and spaces, \n to add more lines
Interm? Line class to be a collaborator of Diamond

Algo

class: Line

method: constructor
@letter = input string letter, target letter
@line_width => max width of longest line, same for all lines

instance method: build
get current letter as an argument
empty line string to add to
build each line of diamond based on current letter and target letter
return 'A' if current and target letters are 'A'
otherwise
target letter gives max line width
current letter is what should be printed twice (except 'A', just once)
return line string

class: Diamond
class method: make_diamond
target letter as an argument, input

start with empty diamond String
start with 'A' as current letter no matter what

build the top half of the diamond
loop
add new Line object, from current letter to target letter, to diamond String
  increment letter counter for next letter
  add line break
  break loop if current letter equals target letter
end loop

build bottom half
loop
add new Line object, from current letter to target letter, to diamond String
  increment letter counter for previous letter ( - 1 )
  add line break
  break loop if current letter equals 'A'
end loop

return diamond String
=end

class Line
  BLANK = " "

  def initialize(letter, target_ltr)
    @letter = letter
    @line_width = target_ltr.ord * 2 - 129
    @line_width = 1 if target_ltr == 'A'
  end

  def space
    case @letter
    when 'A' then ''
    when 'B' then BLANK
    else
      BLANK * (2 * (@letter.ord - 66) + 1)
    end
  end

  def build
    spaced_letters = ''

    spaced_letters << @letter + space
    spaced_letters << @letter unless @letter == 'A'

    spaced_letters.center(@line_width)
  end
end

class Diamond
  def self.make_diamond(target_ltr)
    return "A\n" if target_ltr == 'A'
    diamond = ''
    ltr_num = 65 # ord for 'A'

    loop do # top half loop
      diamond << Line.new(ltr_num.chr, target_ltr).build
      diamond << "\n"
      ltr_num += 1
      break if ltr_num.chr == target_ltr
    end

    loop do # bottom half loop
      diamond << Line.new(ltr_num.chr, target_ltr).build
      diamond << "\n"
      break if ltr_num.chr == 'A'
      ltr_num -= 1
    end

    diamond
  end
end

# puts Diamond.make_diamond('S')
