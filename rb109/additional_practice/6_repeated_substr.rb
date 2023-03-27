=begin

Problem:
For a given nonempty string s find a minimum substring t and the maximum number k,
such that the entire string s is equal to t repeated k times.
input: string
output: array (substr and count)

Examples:
"ababab" => ["ab", 3]
"abcde" => ["abcde", 1]

Data:
input: string
output: array
interm: array

Algo:
define method that takes one parameter, string
iterate "length" from 1 to string size
  iterate "index" from 0 to string size - 1
  substr = string index position start and length long
  if substr * string size / length matches string, return array of substring and length

=end

def rep_substr(str)
  1.upto(str.size) do |long|
    0.upto(str.size - 1) do |idx|
      substr = str[idx, long]
      count = (str.size / long)
      return [substr, count] if substr * count == str
    end
  end
end
  
p rep_substr("ababab") == ["ab", 3]
p rep_substr("abcde") == ["abcde", 1]
