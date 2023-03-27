VALID_CHOICES = %w(rock paper scissors)

def prompt(message)
  Kernel.puts("=> #{message}")
end

def win?(first, second)
  (first == 'rock' && second == 'scissors') ||
    (first == 'paper' && second == 'rock') ||
    (first == 'scissors' && second == 'paper')
end

def display_results(player, computer, scores)
  if win?(player, computer)
    prompt("Yay, you WON this round!!")
    scores[:player] += 1
  elsif win?(computer, player)
    prompt("Oh no, the Computer won this round!")
    scores[:computer] += 1
  else
    prompt("It's a tie!")
  end
end

def display_score(scores)
  prompt("**SCORE**  You: #{scores[:player]} vs Computer: #{scores[:computer]}")
  puts ""
end

score_hash = { player: 0, computer: 0 }

loop do # main loop
  choice = ''
  loop do
    prompt("Choose one: #{VALID_CHOICES.join(', ')}")
    choice = Kernel.gets().chomp()

    if VALID_CHOICES.include?(choice)
      break
    else
      prompt("That's not a valid choice.")
    end
  end

  computer_choice = VALID_CHOICES.sample

  puts ""
  prompt("You chose: #{choice.upcase};
          Computer chose: #{computer_choice.upcase}")

  display_results(choice, computer_choice, score_hash)
  display_score(score_hash)

  prompt("Do you want to play another round?")
  answer = Kernel.gets().chomp()
  system 'clear'
  break unless answer.downcase().start_with?('y')
end

prompt("Thank you for playing. Goodbye!")
display_score(score_hash)
