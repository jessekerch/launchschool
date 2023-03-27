# Jesse Kercheval
# May 16, 2022
# RB100
# gotta remember the scope for variables 
# shadowing happens here because the block a is shadowing the local variable a which remains unmodified

a = 7
array = [1, 2, 3]

def my_value(ary)
  ary.each do |b|
    a += b
  end
end

my_value(array)
puts a