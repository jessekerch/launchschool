def return_threes(array)
  array.map do |subarr|
    subarr.select do |num|
      num % 3 == 0
    end
  end
end

arr = [[2], [3, 5, 7], [9], [11, 13, 15]]

p return_threes(arr)