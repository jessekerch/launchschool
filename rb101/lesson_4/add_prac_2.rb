# def sum_of_ages(hash)
#   sum = 0
#   hash.to_a.each { |pair| sum += pair.last }
#   sum
# end

# def sum_of_ages(hash)
#   sum = 0
#   hash.each { |_,age| sum += age }
#   sum
# end

def sum_of_ages(hash)
  hash.values.reduce(:+)
end

ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 5843, "Eddie" => 10,
         "Marilyn" => 22, "Spot" => 237 }

p sum_of_ages(ages)