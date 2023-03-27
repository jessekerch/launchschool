# written by Jesse Kercheval
# May 13, 2022 
# Final challenge in Intro to Ruby Programming exercises
# basically it's exercise 11 but with multiple contacts
# Launchschool


contact_data = [["joe@email.com", "123 Main st.", "555-123-4567"],
            ["sally@email.com", "404 Not Found Dr.", "123-234-3454"],
            ["randy@halloffame.com", "The End Zone", "1-800-TOUCHDOWN" ],
            ["hannah@crystalpalace.com", "1311 Westmont", "310-456-3245"] ]

contacts = {"Joe Smith" => {}, "Sally Johnson" => {}, "Randy Moss" => {}, "Hannah Crystal K." => {} }

count = 0

contacts.each do |name, value| 
  contacts[name][:email] = contact_data[count][0]
  contacts[name][:address] = contact_data[count][1]
  contacts[name][:phone] = contact_data[count][2]
  count += 1
end

contacts.each { |name, info| puts "Hi #{name}, you're at #{info[:email]}, #{info[:address]}, #{info[:phone]}" }