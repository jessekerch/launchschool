=begin

Problem:
For a given nonempty string s find a minimum substring t and the maximum number k,
such that the entire string s is equal to t repeated k times.
input: string
output: array (substr and count)
rules: input is lowercase alpha

Examples:
"ababab" => ["ab", 3]
"abcde" => ["abcde", 1]

Data:
input: String
output: array with substr and count

Algo:
define method rep_substr to take one string param str
iterate "long" from 1 to str size
  iterate "idx" from 0 to str size - long
    if "long" characters substr * str size / long equal str, return substr and count ([substr, str size / long])

=end

def rep_substr(str)
  1.upto(str.size) do |long|
    0.upto(str.size - long) do |idx|
      return [str[idx, long], str.size / long] if str[idx, long] * (str.size / long) == str 
    end
  end
end

p rep_substr("ababab") == ["ab", 3]
p rep_substr("abcde") == ["abcde", 1]