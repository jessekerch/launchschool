def first_three_chars!(array)
  array.map! { |name| name = name[0, 3] }
end

flintstones = %w(Fred Barney Wilma Betty BamBam Pebbles)
p flintstones
p flintstones.object_id
first_three_chars!(flintstones)
p flintstones
p flintstones.object_id