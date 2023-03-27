# Jesse Kercheval
# May 31, 2022
# RB100 Lesson 1
# Why is it that a constant is accessible from a method, but a local variable isn't? Here's an example:

NUMBERS = [1, 2, 3]
arr = [1, 2, 3]

def test(arr)
 puts NUMBERS.inspect
 puts arr.inspect
end

test(arr)

# => [1, 2, 3]
# => NameError: undefined local variable or method `arr'