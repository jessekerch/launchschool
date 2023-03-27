VALUES = { "2" => 2, "3" => 3, "4" => 4, "5" => 5, "6" => 6, "7" => 7, "8" => 8, "9" => 9,
          "10" => 10, "jack" => 10, "queen" => 10, "king" => 10, "ace" => 11 }

suits = ["hearts", "diamonds", "clubs", "spades"]
ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"]

def build_deck(sts, rnk)
  sts.to_h { |suit| [suit, rnk] }
end

def show_cards(hand)
  p hand
end

def points_in_hand(hand)
  points = 0
  hand.each do |suit, rank_array|
    rank_array.each { |rank| points += VALUES[rank] }
  end
  # handle any Aces
  hand.select { |_, value| value == "ace" }.count.times do
    points -= 10 if points > 21
  end
  points
end

def deal_card(deck)
  { deck.keys.sample => [deck[deck.keys.sample].sample] }
end

def add_card!(hand, new_card)
  if hand.has_key?(new_card.keys.first)
    hand[new_card.keys.first] << new_card.values.first.first
  else
    hand[new_card.keys.first] = [new_card.values.first.first]
  end
end

def update_deck(deck, card)
  deck[card.keys.first].delete(card.values.first.first)
end

def bust?(hand)
  points_in_hand(hand) > 21
end

def player_turn(hand, deck)
  answer = nil
  loop do
    print "You have "
    show_cards(hand)
    puts "hit or stay?"
    answer = gets.chomp
    break if answer == 'stay' || bust?(hand)
    deal_card(deck)
  end
  
  if bust?(hand)
    # probably end the game? or ask the user to play again?
  else
    puts "You chose to stay!"
  end
end


#start with zero points
player_points = 0
computer_points = 0

deck = build_deck(suits, ranks)

# deal the player a card and initialize player hand
new_card = deal_card(deck)
update_deck(deck, new_card)
player_cards = new_card

# deal the computer a card and initialize computer hand
new_card = deal_card(deck)
update_deck(deck, new_card)
computer_cards = new_card

# deal the player a second card
new_card = deal_card(deck)
update_deck(deck, new_card)
add_card!(player_cards)

# deal the computer a second card
new_card = deal_card(deck)
update_deck(deck, new_card)
if computer_cards.has_key?(new_card.keys.first)
  computer_cards[new_card.keys.first] << new_card.values.first.first
else
  computer_cards[new_card.keys.first] = [new_card.values.first.first]
end

print "You have "
show_cards(player_cards)
print "Computer has "
show_cards(computer_cards)

player_turn(player_cards, deck)

p player_cards
p computer_cards

player_points = points_in_hand(player_cards)
computer_points = points_in_hand(computer_cards)

puts "Player has #{player_points} points"
puts "Computer has #{computer_points} points"
puts ""
p deck
