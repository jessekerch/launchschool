def fizzbuzz(first, last)
  for num in first..last do
    if num % 3 == 0 && num % 5 == 0 
      print "FizzBuzz"
    elsif num % 3 == 0 
      print "Fizz"
    elsif num % 5 == 0
      print "Buzz"
    else
      print num.to_s
    end
    print ", " unless num == last
  end  
end


fizzbuzz(1, 15) # -> 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz

