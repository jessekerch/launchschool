# Problem: 
# - Input: string
# - Output:
# - Rules: 

# Examples/Rules:
# balanced?('What (is) this?') == true
# balanced?('What is) this?') == false
# start with false
# strip away all characters except for ( and ) and assign parenthesis variable
# index = 0
# iterate through indexes from current to size of parenthesis string -1
# 
# if ( then
#   search for pair ")"
#   search => if ( then search for pair
# elsif ) then += 1 to index (or 2?) break
# else return false
# ( -> ( -> ) -> )

# Data Structures:
# - input structure:
# - output structure:
# - intermediate steps?

# Algorithm
# - define a method 
#   - 
# - return or output?

# Code


def balanced?(string)
  open = 0
  string.each_char do |char|
    break if open < 0
    if char == "("
      open += 1
    elsif char == ")"
      open -= 1
    end
  end
  open == 0
end

p balanced?('What (is) this?') == true
p balanced?('What is) this?') == false
p balanced?('What (is this?') == false
p balanced?('((What) (is this))?') == true
p balanced?('((What)) (is this))?') == false
p balanced?('Hey!') == true
p balanced?(')Hey!(') == false
p balanced?('What ((is))) up(') == false