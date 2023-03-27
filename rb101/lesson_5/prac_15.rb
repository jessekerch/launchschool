def all_evens(array)
  
  array.select do |hash|
    hash.all? { |key, arr| arr.all? { |num| num.even? } }
  end
end

arr = [{a: [1, 2, 3]}, {b: [2, 4, 6], c: [3, 6], d: [4]}, {e: [8], f: [6, 10]}]

p all_evens(arr)