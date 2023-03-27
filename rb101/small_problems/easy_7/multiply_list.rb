# def multiply_list(arr1, arr2)
#   product_arr = []
#   index = 0
  
#   loop do
#     product_arr << arr1[index] * arr2[index]
#     index += 1
#     break if index >= arr1.size
#   end
  
#   product_arr
# end

def multiply_list(arr1, arr2)
  arr1.zip(arr2).map { |arr| arr.reduce(:*) }
end

p multiply_list([3, 5, 7], [9, 10, 11]) #== [27, 50, 77]