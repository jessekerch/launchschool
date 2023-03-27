def gen_uuid
  characters = []
  (0..9).each { |digit| characters << digit.to_s }
  ('a'..'f').each { |digit| characters << digit }
  sizes = [8, 4, 4, 4, 12]
  uuid = ''
  sizes.each do |size|
    size.times do 
      uuid << characters.sample
    end
    uuid << '-' unless size == sizes.last
  end
  uuid
end

p gen_uuid


# 8-4-4-4-12

# "f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91"