produce = {
  'apple' => 'Fruit',
  'carrot' => 'Vegetable',
  'pear' => 'Fruit',
  'broccoli' => 'Vegetable'
}

def select_fruit(item_hash)
  selected_hash = {}
  counter = 0
  item_arr = item_hash.keys
  loop do
    break if counter >= item_arr.length
    item = item_arr[counter]
    category = item_hash[item]
    if category == 'Fruit'
      selected_hash[item] = category
    end
    counter += 1
  end
  selected_hash
end

p select_fruit(produce) # => {"apple"=>"Fruit", "pear"=>"Fruit"}
