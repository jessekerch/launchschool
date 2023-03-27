=begin
Problem
  input: string object, "word"
    array collection of strings, "arr"
  output: array of strings, words that are anagrams of "word"
  rules: anagrams have the same letters but order may be different
  
Example
  #"listen".match(["enlists", "google", "inlets", and "banana"]) == ["inlets"]
  
Data
  input: string and array
  output: array

Algo
  input string is called "org_str"
  input array is called "arr"
  set "anagrams" to empty array []
  iterate through arr, checking each "check_str"
    if check_str sorted == org_str sorted *(sort string by arr of chars and then join)
    add check_str to anagrams array
  return anagrams array

Code
=end

class Anagram
  def initialize(org_str)
    @org_str = org_str.downcase
  end
  
  def match(arr)
    # arr = array of words, possible anagrams of @org_str
    anagrams = []
    arr.each do |str|
      check_str = str.downcase
      if anagram?(check_str, @org_str) && check_str != @org_str
        anagrams << str
      end
    end
    anagrams
  end
  
  def anagram?(str1, str2)
    str1.chars.sort.join == str2.chars.sort.join
  end
end

listen = Anagram.new("listen")
p listen.match(["enlists", "google", "inlets", "banana"]) #== ["inlets"]