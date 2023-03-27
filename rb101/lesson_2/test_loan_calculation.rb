# def number_to_currency(num)
#   "$#{num.to_s.gsub(/\d(?=(...)+$)/, '\0,')}"
# end


monthly_payment = 100000 * ((0.06 / 12) / (1.0 - (1.0 + (0.06 / 12))**(-120.0)))

puts "Your monthly payment is: $#{monthly_payment.round(2)}"

  