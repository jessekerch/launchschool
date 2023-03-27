# minilang('PRINT')
# # 0

# minilang('5 PUSH 3 MULT PRINT')
# # 15

# minilang('5 PRINT PUSH 3 PRINT ADD PRINT')
# # 5
# # 3
# # 8

# minilang('5 PUSH POP PRINT')
# # 5

# minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT')
# # 3
# # 5
# # 10
# # 4
# # 7

# minilang('3 PUSH PUSH 7 DIV MULT PRINT ')
# # 6

# minilang('4 PUSH PUSH 7 MOD MULT PRINT ')
# # 12

# minilang('-3 PUSH 5 SUB PRINT')
# # 8

# minilang('6 PUSH')
# # (nothing printed; no PRINT commands)

# Problem:
#   - input: string, representing commands and values
#   - output: various, depending on command
#   - n Place a value n in the "register". Do not modify the stack.
#     PUSH Push the register value on to the stack. Leave the value in the register.
#     ADD Pops a value from the stack and adds it to the register value, storing the result in the register.
#     SUB Pops a value from the stack and subtracts it from the register value, storing the result in the register.
#     MULT Pops a value from the stack and multiplies it by the register value, storing the result in the register.
#     DIV Pops a value from the stack and divides it into the register value, storing the integer result in the register.
#     MOD Pops a value from the stack and divides it into the register value, storing the integer remainder of the division in the register.
#     POP Remove the topmost item from the stack and place in register
#     PRINT Print the register value
#   - rules: all input strings will be valid, nothing empty
#    - no test cases push 0, so I can default register to 0

# Data Structures: 
#   - input string
#   - ouput string, when asked to PRINT or output the value to the screen
#   - array to hold all commands and values, basically split the input string
#     - stack array, to hold commands separately
#     - values array, to hold any values separately
  
# Steps: 
#   - initialize array variable "stack", point to input string split by " " and reversed order
#   - intialize a variable called register, an integer with default 0 
  
#   - pop off the first (index -1) element and use a case statement (mutate the array)
#     - when it is an integer (integer version == string version)
#       - reassign register variable to the integer 

#     - when "PUSH"
#       - add register value to the end of the stack (push to end of array)
#       - do not reassign register value 
    
#     - when "ADD"
#       - pop a value (the next element) from the stack array
#       - add value to register value
#       - reassign register to the result
    
#     - when "SUB", "MULT", "DIV", "MOD"
#       - pop a value (the next element) from the stack array
#       - subtract, multiply, divide, mod (divide and take remainder) value with register value
#       - reassign register to the result 
      
#     - when "POP"
#       - pop a value (the next element) from the stack and reassign register to it

#     - when "PRINT"
#       - print register variable value to the screen

# Code: 

def minilang(program)
  register = 0
  stack = []
  program.split.each do |command|
    case command
    when "ADD" then register += stack.pop.to_i
    when "SUB" then register -= stack.pop.to_i
    when "MULT" then register *= stack.pop.to_i
    when "DIV" then register /= stack.pop.to_i
    when "MOD" then register %= stack.pop.to_i
    when "PUSH" then stack.push(register.to_s)
    when "POP" then register = stack.pop.to_i
    when "PRINT" then puts register
    else register = command.to_i
    end
  end
end


minilang('PRINT')
# 0

minilang('5 PUSH 3 MULT PRINT')
# 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT')
# 5
# 3
# 8

minilang('5 PUSH POP PRINT')
# 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT')
# 5
# 10
# 4
# 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT ')
# 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT ')
# 12

minilang('-3 PUSH 5 SUB PRINT')
# 8