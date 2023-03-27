=begin

Given a List [] of n integers , find minimum number to be inserted in a list,
so that sum of all elements of list should equal the closest prime number .

Notes
    List size is at least 2 .
    List's numbers will only positives (n > 0) .
    Repetition of numbers in the list could occur.
    The newer list's sum should equal the closest prime number .

Input >> Output Examples

1- minimumNumber ({3,1,2}) ==> return (1)

Explanation:
Since the sum of the list's elements equal to (6) , the minimum number to be inserted to transform the sum to prime number is (1) == 
hich will make the sum of the List equal the closest prime number (7).


=end

def is_prime?(num)
  return false if num.even?
  (2...num).each do |x|
    return false if num % x == 0
  end
  true
end

def minimum_number(arr)
  sum = arr.sum
  insert = 0
  loop do
    return insert if is_prime?(sum + insert)
    insert += 1
  end
end


p minimum_number([3,1,2]) #== 1
p minimum_number([5,2]) #== 0
p minimum_number([1,1,1]) #== 0
p minimum_number([2,12,8,4,6]) #== 5
p minimum_number([50,39,49,6,17,28]) #== 2
