OPERANDS = [:+, :-, :*, :/, :%, :**]

def calculate(num1, num2, operation)
  [num1, num2].inject(operation)
end

print "Enter the first number: "
first_int = gets.chomp.to_f

print "Enter the second number: "
second_int = gets.chomp.to_f

OPERANDS.each do |operand|
  answer = calculate(first_int, second_int, operand)
  puts "#{first_int.round(0)} #{operand.to_s} #{second_int.round(0)} = #{answer.round(2)}"
end

