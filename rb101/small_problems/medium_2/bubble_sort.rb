def bubble_sort!(array)
  n = array.length
  loop do
    swapped = false
    for i in 1..n-1 do 
      if array[i-1] > array[i] then
        array[i-1], array[i] = array[i], array[i-1]
        swapped = true
      end
    end
    break unless swapped
  end
  array
end

array = [5, 3]
p bubble_sort!(array) == [3, 5]

array = [6, 2, 7, 1, 4]
p bubble_sort!(array) == [1, 2, 4, 6, 7]

array = %w(Sue Pete Alice Tyler Rachel Kim Bonnie)
p bubble_sort!(array) == %w(Alice Bonnie Kim Pete Rachel Sue Tyler)