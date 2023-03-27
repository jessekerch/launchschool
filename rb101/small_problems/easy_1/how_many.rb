# Write a method that counts the number of occurrences of each element in a given array.
# SET vehicles = array of vehicles, some repeats
# SET iterator = counter for index while going over the array of vehicles
# SET current_vehicle = for counting through the vehicle array and comparing to index vehicle

# WHILE iterator <= length of vehicles array
#   SET current_vehicle = unique vehicles[iterator] (using .uniq to limit)
#   SET count = 0, counting the number of occurrences of each vehicle when iterating
#   EACH go over the vehicles array 
#     IF current_vehicle == vehicles[iterator]
#       count += 1
    
#   UNLESS current_vehicle == nil, PRINT current_vehicle and count
#   INCREASE iterator by 1 
# END

def count_occurrences(vehicles)
  iterator = 0
  while iterator <= vehicles.length
    current_vehicle = vehicles.uniq[iterator]
    count = 0
    vehicles.each { |vehicle| count += 1 if vehicle == current_vehicle }
    puts "#{current_vehicle} => #{count}" unless current_vehicle == nil
    iterator += 1
  end 
end

vehicles = [
  'car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'
]

count_occurrences(vehicles)

