def fib(n)
  return n if n < 2
  fib(n - 1) + fib(n - 2)
end

p fib(1) == 1
p fib(2) == 1
p fib(3) == 2
p fib(4) == 3
p fib(5) == 5
p fib(12) == 144
p fib(20) == 6765