def increment(array)
  array.map do |hash|
    new_hash = {}
    hash.each do |k, v|
      new_hash[k] = v + 1
    end
    new_hash
  end
end

arr = [{a: 1}, {b: 2, c: 3}, {d: 4, e: 5, f: 6}]

p increment(arr)