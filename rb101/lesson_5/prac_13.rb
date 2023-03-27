arr = [[1, 6, 9], [6, 1, 7], [1, 8, 3], [1, 5, 9]]

p arr.sort_by { |subarr| subarr.select { |num| num.odd? } }

# [[1, 8, 3], [1, 5, 9], [6, 1, 7], [1, 6, 9]]