arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']]

sorted_arr = arr.map { |subarr| subarr.sort { |a, b| b <=> a } }

p sorted_arr
