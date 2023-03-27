# def running_total(array)
#   index = 1
#   count = array.count - 1
#   count.times do
#     array[index] += array[index - 1]
#     index += 1
#   end
#   array
# end

def running_total(array)
  total = 0
  array.map { |num| total += num }
end

p running_total([2, 5, 13]) == [2, 7, 20]
p running_total([14, 11, 7, 15, 20]) == [14, 25, 32, 47, 67]
p running_total([3]) == [3]
p running_total([]) == []