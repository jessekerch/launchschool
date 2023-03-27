=begin
Problem
input: number
output: string, abundant, perfect, or deficient
rules: 
  perfect: aliquot sum = original number
  abundant: aliquot sum > original num
  dificient: aliquot sum < original num
  prime numbers always deficient since only divisor is 1
  
  implicit: test shows that it needs to be a class method
  
Example:
  6 => 'perfect'
  5 no, 4 no, 3 yes, 2 yes, 1 yes =>
  3 + 2 + 1 = 6 == 6 => perfect
  
Data:
input: Integer
output: String
interm: Range from 1 up to original number to iterate 

Algo:
input number is "org_num"
"aliquot" = 1
iterate "n" from 2 up to org_num - 1
  if org_num % n == 0
    aliquot += n
return aliquot

Code
=end
class PerfectNumber
  include Comparable
  
  def self.classify(original)
    raise(StandardError) unless original > 0
    aliquot = 1
    2.upto(original - 1) do |n|
      if original % n == 0
        aliquot += n
      end
    end
    categorize(aliquot, original)
  end
  
  def self.categorize(sum, num)
    case sum <=> num
    when 0 then 'perfect'
    when 1 then 'abundant'
    when -1 then 'deficient'
    end
  end
end

p PerfectNumber.classify(28)