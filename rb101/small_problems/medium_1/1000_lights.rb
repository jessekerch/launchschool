# Write a method that takes one argument, the total number of switches,
# and returns an Array that identifies which lights are on after n repetitions.

# Problem:
# - Input: an integer, representing total number of switches (n)
# - Output: an array, representing which lights are still on after n repetitions
# - Rules: input is an integer
#  - switches start in the off position, then you turn them all on
#  - toggle switches n times, each time flipping switches (on => off, off => on)
#  - for each repetition, skip one more switch:
#    - 1st, all switches  (1, 2, 3, 4, 5, 6, .. n) # => this turns them all on
#    - 2nd, every other switch (2, 4, 6, .. n) # => this turns off every other
#    - 3rd, every third switch (3, 6, 9 .. n) # then on every third
#    - etc. until nth repetition, flipping every n + 1 switch on or off
#  - output is an array of switches still "on"  # => how do I know if they're on or off?

# Examples:
# 10 -> ??? -> [1, 4, 9]
# start -> {1 => "off", 2 => "off", 3 => "off", etc} -> ??? -> [1, 4, 9]

# Data Structures:
# - input structure: an integer, n number of switches and repetitions
# - output structure: an array, which switches are on after n repetitions
# - intermediate steps: hash for switches, key is light number and value "on" and "off"

# Steps
# - create a lights hash, with n entries (n = input) 
#   - helper method: build_lights
#     - input: integer, n, number of lights
#     - output: hash with n entities, light numbers and on or off
#       - entries => key is light number, value is "on" or "off"
# - iterate over lights hash n times, or n repetitions, and flip switches
# - each repetition should flip lights on or off
#   - flip every 2nd, 3rd, 4th etc switch (rep number)
#  - helper method: flip_lights
#    - input: light_board, hash
#    - second input: rep, which repetition and which sequence of lights to flip
#    - return hash, with flipped lights
# - return an array containing number of each light which is on
#   - helper method: check_lights
#   - input: hash, lights
#   - output: array, which lights are on
#   - steps:
#     - select the hash entities which have value => "on"
#     - return the array of keys 

# Code

def which_lights(n)
  lights = build_lights(n)
  
  for rep in 1..n do
    flip_switches(lights, rep)
  end
  
  check_lights(lights)
end

def build_lights(n)
  light_board = {}
  switch = 1
  n.times do 
    light_board[switch] = "off"
    switch += 1
  end
  light_board
end

def flip_switches(lght, seq)
  lght.each do |number, state| 
    if number % seq == 0
      lght[number] = (state == "off") ? "on" : "off"
    end
  end
  lght  
end

def check_lights(light_board)
  light_board.select { |k, v| v == "on" }.keys
end

p which_lights(1000)