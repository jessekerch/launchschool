def spin_me(str)
  str.split.each do |word|
    word.reverse!
  end.join(" ")
end

string = "hello world"
p string
p string.object_id
p spin_me(string) # "olleh dlrow"
p spin_me(string).object_id # "olleh dlrow"
p string
p string.object_id
