# Problem:
# input: string object, string
# output: new string object, stag_caps
# rules:
# - capitalize every other character, others lowercase
# - don't capitalize non-alphabetic but count them in the every other counting

# Examples:
# - 'I Love Launch School!'
# - I => is capitalized   (index 0, even)
# - ' ' => is not capitalized  (index 1, odd)
# - L => is capitalized   (index 2, even
# - o => is not capitalized   (index 3, odd)
# etc

# Data Structure:
# - string object for input variable, string
# - string object for output variable, stag_caps
# - i for index iterator, to modify substrings in input string

# Algorithm:
# - define method which takes one argument, string variable
#   - for loop with index iterator i in range 0..string.length
#     - check substring at index of string variable
#     - if index is even, capitalize and add to new string stag_caps
#     - if index is odd odd, lowercase and add to new string stag_caps
# - return new string variable, stag_caps

def staggered_case(string)
  stag_caps = ""
  idx = 0
  make_caps = true
  while idx < string.length do
    if string[idx] =~ /[a-zA-Z]/ && make_caps
      stag_caps << string[idx].upcase
      make_caps = !make_caps
      idx += 1
    elsif string[idx] =~ /[a-zA-Z]/ && !make_caps
      stag_caps << string[idx].downcase
      make_caps = !make_caps
      idx += 1
    else
      stag_caps << string[idx]
      idx += 1
    end
  end
  stag_caps
end

p staggered_case('I Love Launch School!') == 'I lOvE lAuNcH sChOoL!'
p staggered_case('ALL CAPS') == 'AlL cApS'
p staggered_case('ignore 77 the 444 numbers') == 'IgNoRe 77 ThE 444 nUmBeRs'