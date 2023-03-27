def reverse(array)
  left = 0
  right = -1
  new_array = Array.new(array.size)
  while left <= array.size / 2
    new_array[left] = array[right]
    new_array[right] = array[left]
    left += 1
    right -=1
  end
  
  new_array = [] if array == []
  new_array
end

# LS Official solution uses reverse_each! Cheaters! LOL
# def reverse(array)
#   result_array = []
#   array.reverse_each { |element| result_array << element }
#   result_array
# end

# Suggests looking up 

p reverse([1,2,3,4]) == [4,3,2,1]          # => true
p reverse(%w(a b e d c)) == %w(c d e b a)  # => true
p reverse(['abc']) == ['abc']              # => true
p reverse([]) == []                        # => true

list = [1, 3, 2]                      # => [1, 3, 2]
new_list = reverse(list)              # => [2, 3, 1]
p list.object_id != new_list.object_id  # => true
p list == [1, 3, 2]                     # => true
p new_list == [2, 3, 1]                 # => true