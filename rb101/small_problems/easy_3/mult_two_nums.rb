def multiply(num1, num2)
  arr_product = num1.reduce(:*)
  arr_product * num2
end

p multiply([5, 1], 3) == 15
