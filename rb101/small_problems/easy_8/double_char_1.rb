def repeater(string)
  double = ""
  string.each_char do |char|
    double << char << char
  end
  double
end

p repeater('Hello') == "HHeelllloo"
p repeater("Good job!") == "GGoooodd  jjoobb!!"
p repeater('') == ''
