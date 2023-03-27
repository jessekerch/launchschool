# ask the user for two numbers
# ask the user for an operation to perform
# perform the operation on the two numbers
# output the result
# I learned that calling .to_i on a string will give 0
# .empty?() can be used to make sure a string was input / not empty
# %w(1 2 3 4).include?(operator) we used to check operator was in the options array

require 'yaml'
MESSAGES = YAML.load_file('calculator_messages.yml')

def prompt(message)
  Kernel.puts("=> #{message}")
end 

def valid_number?(num)
  num.to_i.to_s == num
end   

def operation_to_message(op)
  word = ""
  case op
    when '1'
      word = 'Adding'
    when '2'
      word = 'Subtracting'
    when '3'
      word = 'Multiplying'
    when '4'
      word = 'Dividing'
  end
  word
end 

prompt(MESSAGES['welcome'])

name = ""

loop do
  name = Kernel.gets().chomp()
  
  if name.empty?()
    prompt(MESSAGES['valid_name'])
  else
    break
  end
end

prompt("Hello #{name}!")

loop do  # main loop
  number1 = ""
  loop do
    prompt("What's the first number?")
    number1 = Kernel.gets().chomp()
    
    if valid_number?(number1)
      break
    else
      prompt("Hmm... that's not a valid number.")
    end
  end 
  
  number2 = ""
  loop do
    prompt("What's the second  number?")
    number2 = Kernel.gets().chomp()
    
    if valid_number?(number2)
      break
    else
      prompt("Hmm... that's not a valid number.")
    end
  end
  
  prompt(MESSAGES['operator_prompt'])
  
  operator = ""
  loop do
    operator = Kernel.gets().chomp()
    
    if %w(1 2 3 4).include?(operator)
      break
    else 
      prompt("Must choose 1, 2, 3 or 4")
    end
  end
  
  prompt("#{operation_to_message(operator)} the two numbers...")
  
  result = case operator
         when '1'
           number1.to_i() + number2.to_i()
         when '2'
           number1.to_i() - number2.to_i()
         when '3'
           number1.to_i() - number2.to_i()
         when '4'
           number1.to_f() / number2.to_f()
  end 
  
  prompt("The result is #{result}")
  prompt("Do you want to perform another calculation? (Y to calculate again)")
  answer = Kernel.gets().chomp()
  break unless answer.downcase().start_with?("y")
end 

prompt("Thank you for using calculator. Goodbye!")
 