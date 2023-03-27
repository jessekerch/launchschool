=begin


=end

def comp(array1, array2)
  array1.sort!
  array2.sort!
  (0..array1.size - 1).each do |idx|
    return false if (array1[idx] *= array1[idx]) != array2[idx]
  end
  true
end

p comp( [121, 144, 19, 161, 19, 144, 19, 11], 
[11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]) == true
