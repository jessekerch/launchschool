# 5.13.2022 Jesse Kercheval
#Launchschool RB100
# iterate over contact_data and enter each info with an associated symbol into the contacts hash value 
# just for one contact at first 

contacts = {"Joe Smith" => {}}
contact_data = ["joe@email.com", "123 Main st.", "555-123-4567"]

contacts.each do |key, value| 
  contacts[key][:email] = contact_data[0]
  contacts[key][:address] = contact_data[1]
  contacts[key][:phone] = contact_data[2]
end
