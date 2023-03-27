def double_consonants(string)
  double = ""
  string.each_char do |char|
    double << char
    double << char if char.downcase =~ /[b-df-hj-np-tv-z]/
  end
  double
end

p double_consonants('String') == "SSttrrinngg"
p double_consonants("Hello-World!") == "HHellllo-WWorrlldd!"
p double_consonants("July 4th") == "JJullyy 4tthh"
p double_consonants('') == ""