advice = "Few things in life are as important as house training your pet dinosaur."
p advice.slice!("Few things in life are as important as ")
p advice

# LS solution:
# advice.slice!(0, advice.index('house'))  # => "Few things in life are as important as "
# p advice # => "house training your pet dinosaur."