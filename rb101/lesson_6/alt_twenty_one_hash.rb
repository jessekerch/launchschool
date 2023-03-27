VALUES = { "2" => 2, "3" => 3, "4" => 4, "5" => 5, "6" => 6, "7" => 7, "8" => 8, "9" => 9,
          "10" => 10, "J" => 10, "Q" => 10, "K" => 10, "A" => 11 }

def build_deck(sts, rnk)
  sts.to_h { |suit| [suit, rnk] }
end

def draw_card(dck)
  { dck.keys.sample => [dck[dck.keys.sample].sample] }
end

def update_deck(dck, card)
  dck[card.keys.first].delete(card.values.first.first)
  dck
end

def hit(hand, card)
  if hand.has_key?(card.keys.first)
    hand[card.keys.first] << card.values.first.first
  else
    hand[card.keys.first] = [card.values.first.first]
  end
end

def alternate_player(current)
  if current == "player" 
    return "computer"
  else 
    return "player"
  end
end  

def points_in_hand(hand)
  points = 0
  hand.each do |suit, rank_array|
    rank_array.each { |rank| points += VALUES[rank] }
  end
  # handle any Aces
  hand.select { |_, value| value.include?("A") }.count.times do
    points -= 10 if points > 21
  end
  points
end

def bust?(hand)
  points_in_hand(hand) > 21
end

def player_turn(hand, dck)
  loop do
    puts "You have: #{hand}"
    print "hit or stay? "
    answer = gets.chomp
    if answer == "hit"
      new_card = draw_card(dck)
      hit(hand, new_card)
      update_deck(dck, new_card)
    end
    break if answer == "stay" || bust?(hand)
  end
  
  if bust?(hand)
    p hand
    puts "Busted!"
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

def display_winner(win)
  case win
  when "computer" then puts "Computer wins!"
  when "player" then puts "You won!"
  when "tie" then puts "A tie! Computer wins all ties!"
  end
end

loop do
  system 'clear'
  #start with zero points
  player_points = 0
  computer_points = 0
  player_cards = {}
  computer_cards = {}
  
  deck = {"♥"=>["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"], "♦"=>["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"], "♣"=>["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"], "♠"=>["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]}
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
  
  puts "Computer has a #{computer_cards.values.first.first}#{computer_cards.keys.first.capitalize}"
  
  player_turn(player_cards, deck)
  computer_turn(computer_cards, deck)
  
  player_points = points_in_hand(player_cards)
  computer_points = points_in_hand(computer_cards)
  
  winner = determine_winner(player_points, computer_points)
  puts ""
  display_winner(winner)
  puts ""
  puts "Player had: #{player_cards}, #{player_points} points"
  puts "Computer had: #{computer_cards}, #{computer_points} points"
  
  print "Would you like to play again? (y/n) "
  again = gets.chomp.downcase
  break unless again.start_with?('y')
end
