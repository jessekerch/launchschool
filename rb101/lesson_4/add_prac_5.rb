# def find_be_index(array)
#   index = nil
#   array.each_with_index do |name, idx|
#     if name[0, 2] == 'Be'
#       index = idx
#     end
#   end
#   index
# end

def find_be_index(array)
  array.index { |name| name[0, 2] == "Be" }
end

flintstones = %w(Fred Barney Wilma Betty BamBam Pebbles)
p find_be_index(flintstones)
p flintstones[find_be_index(flintstones)]