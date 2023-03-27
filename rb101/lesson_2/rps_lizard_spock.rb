VALID_CHOICES = { R: 'Rock', P: 'Paper', C: 'Scissors',
                  S: 'Spock', L: 'Lizard' }
MOVES_AND_WINS = { R: [:C, :L], P: [:S, :R], C: [:P, :L],
                   S: [:R, :C], L: [:S, :P] }

def prompt(message)
  Kernel.puts("=> #{message}")
end

def win?(first, second)
  MOVES_AND_WINS[first].include?(second)
end

def display_results(player, computer)
  if win?(player, computer)
    prompt("Yay, you won this round!!")
  elsif win?(computer, player)
    prompt("Oh no, the Computer won this round!")
  else
    prompt("It's a tie!")
  end
end

def add_point(player, computer, scores)
  if win?(player, computer)
    scores[:player] += 1
  elsif win?(computer, player)
    scores[:computer] += 1
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
    prompt("Choose one: (R)ock, (P)aper, s(C)issors, (S)pock, or (L)izard")
    choice = gets.chomp.upcase.to_sym

    if VALID_CHOICES.include?(choice)
      break
    else
      prompt("That's not a valid choice.")
    end
  end

  computer_choice = VALID_CHOICES.keys.sample

  puts ""
  prompt("You chose: #{VALID_CHOICES[choice].upcase}; " +
        "Computer chose: #{VALID_CHOICES[computer_choice].upcase}")

  display_results(choice, computer_choice)
  add_point(choice, computer_choice, score_hash)
  display_score(score_hash)

  prompt("Do you want to play another round?")
  answer = Kernel.gets().chomp()
  system 'clear'
  break if answer.downcase().start_with?('n')
end

prompt("Thank you for playing. Goodbye!")
display_score(score_hash)
