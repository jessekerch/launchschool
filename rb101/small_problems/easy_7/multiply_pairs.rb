def multiply_all_pairs(arr1, arr2)
  new_array = []
  index1 = 0
  
  loop do
    number1 = arr1[index1]
    index2 = 0
  
    loop do
      number2 = arr2[index2]
      new_array << number1 * number2
      index2 += 1
      break if index2 >= arr2.size
    end
  
    index1 += 1
    break if index1 >= arr1.size
  end
  
  new_array.sort  
end

p multiply_all_pairs([2, 4], [4, 3, 1, 2]) #== [2, 4, 4, 6, 8, 8, 12, 16]

