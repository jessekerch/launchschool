=begin

Mothers arranged a dance party for the children in school. At that party, there are only mothers and their children. All are having great fun on the dance floor when suddenly all the lights went out. It's a dark night and no one can see each other. But you were flying nearby and you can see in the dark and have ability to teleport people anywhere you want.
Legend:
-Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".
-Function input: String contains only letters, uppercase letters are unique.
Task:
Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb". 

Problem:
input: string object
output: String
rules:
input contains upper and lowercase characters
input blank should output blank
always parents and children

Example:
"aAbaBb" => "AaaBbb"
"aAbaBb" => 

Data:
input: String
output: String
interm: Hash

Algo:
define method find_children to take one parameter "str"
sort the string
make "families" variable equal to ""
make variable "hash" as blank Hash ({})
iterate through each character of the string "char"
  if uppercase
    create hash key "char", with value ""
  if not
    add "char" to the value or char uppercase
  
iterate through hash, each key and value
    add the key to families
    add the values to families

return families, put back into string
=end

def find_children(str)
  str = str.chars.sort.join
  families = ""
  hash = {}
  str.chars.each do |char|
    if ("A".."Z").include?(char)
      hash[char] = ""
    elsif ("a".."z").include?(char)
      hash[char.upcase] << char
    end
  end
  hash.each do |k, v|
    families << k
    families << v
  end
  families
end

p find_children("abBA") == "AaBb"
p find_children("AaaaaZazzz")=="AaaaaaZzzz"
p find_children("CbcBcbaA")=="AaBbbCcc"
p find_children("xXfuUuuF")== "FfUuuuXx"
p find_children("") == ""
