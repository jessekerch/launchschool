class Animal
end

class Cat < Animal
end

class Bird < Animal
end

cat1 = Cat.new
puts cat1.class.ancestors
cat1.color
