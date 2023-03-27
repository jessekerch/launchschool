VALUES = { "2" => 2, "3" => 3, "4" => 4, "5" => 5, "6" => 6, "7" => 7, "8" => 8,
           "9" => 9, "10" => 10, "J" => 10, "Q" => 10, "K" => 10, "A" => 11 }

def prompt(text)
  puts "=> #{text}"
end

def build_deck
  deck = []
  suits = ["♥", "♦", "♣", "♠"]
  ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
  suits.each do |suit|
    ranks.each { |rank| deck << "#{rank}#{suit}" }
  end
  deck
end

def draw_card(dck)
  dck.sample
end

def update_deck(dck, card)
  dck.delete(card)
  dck
end

def hit(hand, card)
  hand << card
end

def alternate_player(current)
  if current == "player"
    "computer"
  else
    "player"
  end
end

def points_in_hand(hand)
  points = 0
  hand.each { |card| points += VALUES[card[0..-2].to_s] }

  # handle any Aces
  hand.select { |card| card.include?("A") }.count.times do
    points -= 10 if points > 21
  end

  points
end

def bust?(hand)
  points_in_hand(hand) > 21
end

def player_turn(hand, name, dck)
  loop do
    prompt("#{name} has: #{hand}")
    print "hit or stay? "
    answer = gets.chomp
    if answer == "hit"
      # system 'clear'
      new_card = draw_card(dck)
      hit(hand, new_card)
      update_deck(dck, new_card)
    end
    break if answer == "stay" || bust?(hand)
  end

  if bust?(hand)
    puts "Oh no, you busted!"
  end
end

def computer_turn(hand, dck)
  while points_in_hand(hand) < 16
    break if bust?(hand)
    new_card = draw_card(dck)
    hit(hand, new_card)
    update_deck(dck, new_card)
  end
end

# def show_hand(cards, delim = ', ', word = 'and')
#   if cards.size == 2
#     cards.join(" #{word} ")
#   else
#     cards[-1] = "#{word} #{cards.last}"
#     cards.join(delim)
#   end
# end

def determine_winner(player, computer)
  if player > 21
    "computer"
  elsif computer > 21
    "player"
  elsif computer > player
    "computer"
  elsif player > computer
    "player"
  else
    "tie"
  end
end

def display_winner(win, name)
  case win
  when "computer" then puts "Computer wins!"
  when "player" then puts "#{name} won!"
  when "tie" then puts "A tie! Computer wins all ties!"
  end
end

def display_score(scores, name)
  prompt("**SCORE: #{name} #{scores[:player]} vs Computer #{scores[:computer]}")
  puts ""
end

# welcome and gets user name
puts "Welcome to Twenty-One! First player to 5 rounds wins."
print "What's your name? "
name = gets.chomp.capitalize

score_hash = { player: 0, computer: 0 }

loop do
  system 'clear'

  # start with empty hands
  player_cards = []
  computer_cards = []

  deck = build_deck
  current = "player"

  # initial deal, 2 cards each to player and computer
  4.times do
    new_card = draw_card(deck)
    update_deck(deck, new_card)

    if current == "player"
      hit(player_cards, new_card)
    else
      hit(computer_cards, new_card)
    end

    current = alternate_player(current)
  end

  # game play starts here
  prompt("Computer has: #{computer_cards[0]} and ??")

  player_turn(player_cards, name, deck)
  computer_turn(computer_cards, deck)

  player_points = points_in_hand(player_cards)
  computer_points = points_in_hand(computer_cards)

  winner = determine_winner(player_points, computer_points)
  winner = "computer" if winner == "tie"
  score_hash[winner.to_sym] += 1

  puts ""
  prompt("#{name} cards: #{player_cards}. Points: #{player_points}.")
  prompt("Computer cards: #{computer_cards}. Points: #{computer_points}.")
  puts ""
  display_winner(winner, name)
  puts ""

  display_score(score_hash, name)
  break if score_hash.values.include?(5)

  print "Would you like to play again? (y/n) "
  again = gets.chomp.downcase
  break unless again.start_with?('y')
end

# after main loop and game play
system 'clear'
prompt "Thanks for playing Twenty-One! Goodbye"
display_score(score_hash, name)
