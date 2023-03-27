def oddities(arr)
  new_arr = []
  arr.each { |element| new_arr << element if arr.index(element).even? }
  new_arr
end

def evenses(arr)
  new_arr = []
  arr.each { |element| new_arr << element if arr.index(element).odd? }
  new_arr
end

p oddities([2, 3, 4, 5, 6]) == [2, 4, 6]
p oddities([1, 2, 3, 4, 5, 6]) == [1, 3, 5]
p oddities(['abc', 'def']) == ['abc']
p oddities([123]) == [123]
p oddities([]) == []

p evenses([2, 3, 4, 5, 6]) == [3 ,5]
p evenses([1, 2, 3, 4, 5, 6]) == [2, 4, 6]
p evenses(['abc', 'def']) == ['def']
p evenses([123]) == []
p evenses([]) == []