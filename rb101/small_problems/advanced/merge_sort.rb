# Problem:
# input: array, unsorted
# output: array, sorted

# [6, 2, 7, 1, 4] -> [[6, 2], [7, 1], [4]] ->
# [[[6], [2]], [[7], [1]], [[4]]] ->
# [[2, 6], [1, 7], [4]] -> 
# [1, 7, 2, 6, ]

# [[[9], [5]], [[7], [1]]] ->
# [[5, 9], [1, 7]] ->
# [1, 5, 7, 9]

def merge_sort(array)
  return array if array.size == 1

  mid = array.size / 2
  arr_1 = array[0...mid]
  arr_2 = array[mid..-1]
  
  arr_1 = merge_sort(arr_1)
  arr_2 = merge_sort(arr_2)
  
  merge(arr_1, arr_2)
end  

def merge(arr_1, arr_2)
  new_array = []
  until arr_1.empty? || arr_2.empty?
    if arr_1[0] < arr_2[0]
      new_array << arr_1.shift
    elsif arr_2[0] < arr_1[0]
      new_array << arr_2.shift
    end
  end
  new_array + arr_1 + arr_2
end

p merge_sort([9, 5, 7, 1]) == [1, 5, 7, 9]
p merge_sort([5, 3]) == [3, 5]
p merge_sort([6, 2, 7, 1, 4]) == [1, 2, 4, 6, 7]
p merge_sort(%w(Sue Pete Alice Tyler Rachel Kim Bonnie)) == %w(Alice Bonnie Kim Pete Rachel Sue Tyler)
p merge_sort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]) == [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]