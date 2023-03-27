# def select_youngest(hash)
#   p youngest = hash.first
#   hash.each do |name, age|
#     if age < youngest[1]
#       youngest = [name, age]
#     end
#   end
#   youngest = {youngest[0] => youngest[1]}
# end

def select_youngest(hash)
  hash.values.min  # good array method to know, .min
end
  
ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 5843, "Eddie" => 10,
         "Marilyn" => 22, "Spot" => 237 }

p select_youngest(ages)
p ages