# def add_age_group(hash)
#   hash.map do |name, stats|
#     age = stats["age"]
#     case
#     when age > 65
#       stats["age_group"] = "senior"
#     when age > 18
#       stats["age_group"] = "adult"
#     else
#       stats["age_group"] = "kid"
#     end
#   end
#   hash
# end

def add_age_group(hash)
  hash.map do |name, stats|
    age = stats["age"]
    case age
    when 0..17
      stats["age_group"] = "kid"
    when 18..64
      stats["age_group"] = "adult"
    else
      stats["age_group"] = "senior"
    end
  end
  hash
end


munsters = {
  "Herman" => { "age" => 32, "gender" => "male" },
  "Lily" => { "age" => 30, "gender" => "female" },
  "Grandpa" => { "age" => 402, "gender" => "male" },
  "Eddie" => { "age" => 10, "gender" => "male" },
  "Marilyn" => { "age" => 23, "gender" => "female"}
}

p add_age_group(munsters)