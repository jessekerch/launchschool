#Egyptian:
# if the numerator is 1, return the denominator as one element of the array

# try to take away 1/1, 1/2, then 1/3, then 1/4, then 1/5, then 1/6 etc.
# unless the result is negative, keep taking away until you're left with exactly 0
# add each number you could take away to the array
# return the array

#Unegyptian:
# Just add up all of the fractions
# Iterate through array of denominators
# Use reduce (or inject?) to add each fraction (Rational(1, denominator))

def egyptian(num)
    return [num.denominator] if num.numerator == 1
    denoms = []
    denom = 1
  until num.numerator == 0 do
    if num - Rational(1, denom) >= 0
      num -= Rational(1, denom)
      denoms << denom
    end
    denom += 1
  end
  denoms
end

def unegyptian(denoms)
  denoms.reduce(Rational(0)) do |total, denom|
    total + Rational(1, denom)
  end
end

p egyptian(Rational(2, 1))    # -> [1, 2, 3, 6]
p egyptian(Rational(137, 60)) # -> [1, 2, 3, 4, 5]
p egyptian(Rational(3, 1))    # -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]

p unegyptian(egyptian(Rational(1, 2))) == Rational(1, 2)
p unegyptian(egyptian(Rational(3, 4))) == Rational(3, 4)
p unegyptian(egyptian(Rational(39, 20))) == Rational(39, 20)
p unegyptian(egyptian(Rational(127, 130))) == Rational(127, 130)
p unegyptian(egyptian(Rational(5, 7))) == Rational(5, 7)
p unegyptian(egyptian(Rational(1, 1))) == Rational(1, 1)
p unegyptian(egyptian(Rational(2, 1))) == Rational(2, 1)
p unegyptian(egyptian(Rational(3, 1))) == Rational(3, 1)
