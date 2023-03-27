def halvsies(arr)
  arr_2 = []
  (arr.count / 2).times do 
    arr_2.unshift(arr.pop)
  end
  [arr, arr_2]
end

p halvsies([1, 2, 3, 4]) == [[1, 2], [3, 4]]
p halvsies([1, 5, 2, 4, 3]) == [[1, 5, 2], [4, 3]]
p halvsies([5]) == [[5], []]
p halvsies([]) == [[], []]
