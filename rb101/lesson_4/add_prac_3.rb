def remove_centenarians(hash)
  hash.select { |_, age| age < 100 }
end

# def remove_centenarians(hash)
#   hash.keep_if {|_, age| age < 100 }
# end

ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 5843, "Eddie" => 10,
         "Marilyn" => 22, "Spot" => 237 }

p remove_centenarians(ages)
p ages