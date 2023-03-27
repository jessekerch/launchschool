WINNING_LINES = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] + # rows
                [[1, 4, 7], [2, 5, 8], [3, 6, 9]] + # columns
                [[1, 5, 9], [3, 5, 7]] # diagonals
INITIAL_MARKER = ' '
PLAYER_MARKER = 'X'
COMPUTER_MARKER = 'O'

def prompt(text)
  puts "=> #{text}"
end

# rubocop:disable Metrics/AbcSize
def display_board(brd)
  # system 'clear'
  prompt "You're an #{PLAYER_MARKER}. Computer is an #{COMPUTER_MARKER}."
  puts ""
  puts "     |     |"
  puts "  #{brd[1]}  |  #{brd[2]}  |  #{brd[3]}  "
  puts "     |     |"
  puts "-----+-----+-----"
  puts "     |     |"
  puts "  #{brd[4]}  |  #{brd[5]}  |  #{brd[6]}  "
  puts "     |     |"
  puts "-----+-----+-----"
  puts "     |     |"
  puts "  #{brd[7]}  |  #{brd[8]}  |  #{brd[9]}  "
  puts "     |     |"
  puts ""
end
# rubocop:enable Metrics/AbcSize

def initialize_board
  new_board = {}
  (1..9).each { |num| new_board[num] = INITIAL_MARKER }
  new_board
end

def empty_squares(brd)
  brd.keys.select { |num| brd[num] == INITIAL_MARKER }
end

def joinor(array, delim = ', ', word = 'or')
  case array.size
  when 0 then ''
  when 1 then array[0].to_s
  when 2 then array.join(" #{word} ")
  else
    array[-1] = "#{word} #{array.last}"
    array.join(delim)
  end
end

def player_places_piece!(brd)
  square = ""

  loop do
    prompt "Choose your next square: (#{joinor(empty_squares(brd))})"
    square = gets.chomp.to_i
    break if empty_squares(brd).include?(square)
    prompt "Sorry, that's not a valid choice."
  end

  brd[square] = PLAYER_MARKER
end

# rubocop:disable Metrics/AbcSize
def smart_move_option(brd)
  WINNING_LINES.each do |line|
    if brd.values_at(*line).count(COMPUTER_MARKER) == 2 &&
       brd.values_at(*line).count(INITIAL_MARKER) == 1
      result = line.select { |space| brd[space] == " " }
      result.first
    end
  end

  WINNING_LINES.each do |line|
    if brd.values_at(*line).count(PLAYER_MARKER) == 2 &&
       brd.values_at(*line).count(INITIAL_MARKER) == 1
      return line[0] if brd[line[0]] == " "
      return line[1] if brd[line[1]] == " "
      return line[2] if brd[line[2]] == " "
    end
  end

  nil
end
# rubocop:enable Metrics/AbcSize

def computer_places_piece!(brd)
  if smart_move_option(brd)
    square = smart_move_option(brd)
  else
    square = empty_squares(brd).sample
  end

  brd[square] = COMPUTER_MARKER
end

def place_piece!(brd, current)
  if current == "player"
    player_places_piece!(brd)
  elsif current == "computer"
    computer_places_piece!(brd)
  end
end

def alternate_player(current)
  if current == "player"
    current = "computer"
  elsif current == "computer"
    current = "player"
  end
  current
end

def board_full?(brd)
  empty_squares(brd).empty?
end

def detect_winner(brd)
  WINNING_LINES.each do |line|
    if brd.values_at(*line).count(PLAYER_MARKER) == 3
      return 'Player'
    elsif brd.values_at(*line).count(COMPUTER_MARKER) == 3
      return 'Computer'
    end
  end
  nil
end

def someone_won?(brd)
  !!detect_winner(brd)
end

def display_score(scores)
  prompt("**SCORE: Player #{scores[:player]} vs Computer #{scores[:computer]}")
  puts ""
end

score_hash = { player: 0, computer: 0 }

loop do
  board = initialize_board
  current_player = "player"
  p board
  

  loop do
    display_board(board)
    place_piece!(board, current_player)
    current_player = alternate_player(current_player)
    break if someone_won?(board) || board_full?(board)
  end

  display_board(board)

  if someone_won?(board)
    prompt "#{detect_winner(board)} won!"
    score_hash[detect_winner(board).downcase.to_sym] += 1
  else
    prompt "It's a tie!"
  end

  display_score(score_hash)

  prompt "Do you want to play again? (y/n):"
  answer = gets.chomp
  break unless answer.downcase.start_with?('y')
end

system 'clear'
prompt "Thanks for playing tic tac toe! Goodbye"
display_score(score_hash)
