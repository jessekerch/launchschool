# Create a simple mad-lib program that prompts for a noun, a verb, an adverb,
# and an adjective and injects those into a story that you create.

# Example

# Enter a noun: dog
# Enter a verb: walk
# Enter an adjective: blue
# Enter an adverb: quickly

# Do you walk your blue dog quickly? That's hilarious!

loop do
  print "Enter a noun: "
  noun = gets.chomp
  print "Enter another noun: "
  noun2 = gets.chomp
  print "Enter a verb: "
  verb = gets.chomp
  print "Enter an adjective: "
  adjective = gets.chomp
  print "Enter an adverb: "
  adverb = gets.chomp
  
  puts "Do you #{verb} your #{noun} in the #{adjective} #{noun2}
        #{adverb}?!?"
        
  puts "Again? (y/n)"
  continue = gets.chomp
  break if continue == "n" || continue.include?('n')
end
