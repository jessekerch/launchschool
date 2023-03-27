hsh = {
  'grape' => {type: 'fruit', colors: ['red', 'green'], size: 'small'},
  'carrot' => {type: 'vegetable', colors: ['orange'], size: 'medium'},
  'apple' => {type: 'fruit', colors: ['red', 'green'], size: 'medium'},
  'apricot' => {type: 'fruit', colors: ['orange'], size: 'medium'},
  'marrow' => {type: 'vegetable', colors: ['green'], size: 'large'},
}

colors_sizes = []
hsh.map do |item, details|
  details[:colors].map! { |color| color.capitalize! }
  if details[:type] == 'fruit'
    colors_sizes << details[:colors]
  elsif details[:type] == 'vegetable'
    colors_sizes << details[:size].upcase
  end
end

p colors_sizes

# [[1, 8, 3], [1, 5, 9], [6, 1, 7], [1, 6, 9]]