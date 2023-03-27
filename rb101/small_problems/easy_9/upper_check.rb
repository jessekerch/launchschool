# LS Solution:
# string == string.upcase
#
# Another elegant answer! Didn't think about that but love it..


def uppercase?(string)
  all_caps = true
  return true if string.empty?
  
  string.chars.each do |char|
    next unless /[A-Za-z]/.match?(char)
    all_caps = false if /[a-z]/.match?(char)
  end
  
  all_caps
end

p uppercase?('t') == false
p uppercase?('T') == true
p uppercase?('Four Score') == false
p uppercase?('FOUR SCORE') == true
p uppercase?('4SCORE!') == true
p uppercase?('') == true
