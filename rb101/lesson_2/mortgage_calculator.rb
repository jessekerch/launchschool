# Jesse Kercheval
# June 9, 2022
# RB101 Lesson 2 - Mortgage Calculator

require 'yaml'
MESSAGES = YAML.load_file('mortgage_messages.yml')
LANGUAGE = 'en'

def messages(message, language = 'en')
  MESSAGES[language][message]
end

def valid_number?(num)
  num.to_i.to_s == num || num.to_f.to_s == num
end

def get_user_name
  loop do
    name = gets.chomp.capitalize

    if name.empty?()
      puts "Please enter a valid name."
    else
      puts "\n" + "Hi #{name}!" + "\n" + "\n"
      break
    end
  end
end

def get_loan_amount
  loop do
    print messages('loan', LANGUAGE)
    loan = gets.chomp

    if valid_number?(loan) && loan.to_f > 0
      return loan.to_f
    else
      puts "Hmm... that's not a valid number."
    end
  end
end

def get_monthly_rate
  loop do
    print messages('apr', LANGUAGE)
    apr = gets.chomp

    if valid_number?(apr) && apr.to_f >= 0
      return (apr.to_f / 100) / 12  # change apr into monthly rate if valid
    else
      puts "Hmm... that's not a valid number."
    end
  end
end

def get_loan_duration
  loop do
    print messages('duration', LANGUAGE)
    duration = gets.chomp

    if valid_number?(duration) && duration.to_f >= 0
      return duration.to_i
    else
      puts "Hmm... that's not a valid number of months."
    end
  end
end

def payment_calc(loan, rate, duration)
  if rate == 0 
    loan / duration # edge case of 0% APR
  else
    loan * (rate / (1 - (1 + rate)**(-duration)))
  end
end

print messages('welcome', LANGUAGE)
get_user_name

loop do # main loop
  loan = get_loan_amount
  monthly_rate = get_monthly_rate
  duration = get_loan_duration

  payment = payment_calc(loan, monthly_rate, duration)
  total_payments = format("%.2f", payment * duration)
  total_interest = format("%.2f", (payment * duration) - loan)

  if duration == 0   # how could I extract this to a method?
    payment = loan   # two parameters for input?
    duration = 1     # four output variables? 
    total_interest = 0
    total_payments = loan
  end

# also, is there a way to interpolate variables in a method?
# I guess I just send everything in as parameters and print from the method?
# but I can't output interpolated variables with a YAML file right?
  puts "\n" + "=> Payment Every Month     $#{format('%.2f', payment)}"
  puts "=> Total of #{duration} Payments   $#{format('%.2f', total_payments)}"
  puts "=> Total Interest          $#{format('%.2f', total_interest)}"
  puts "" # blank line before requesting input

  # Ask user if they'd like to do it again, i.e. back to top of main loop
  puts messages('again', LANGUAGE)
  answer = gets.chomp
  system 'clear'
  break unless answer.downcase() == "y" || answer.downcase() == "yes"
end

puts messages('goodbye', LANGUAGE)