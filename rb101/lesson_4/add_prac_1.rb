def change_to_hash(array)
  hash = {}
  array.each_with_index { |name, idx| hash[name] = idx }
  hash
end

# def change_to_hash(array)
#   index = 0
#   array.map do |name|
#     array[index] = [name, index]
#     index += 1
#   end
#   array.to_h
# end

flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "BamBam"]

p change_to_hash(flintstones)