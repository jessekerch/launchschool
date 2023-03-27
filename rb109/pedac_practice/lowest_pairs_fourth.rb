def sum_pairs(array, target_sum)
  valid_pairs = []
  
  pairs = []
  array.permutation(2) { |pair| pairs << pair }
  valid_pairs = pairs.select { |pair| pair.sum == target_sum }
  p valid_pairs
end

# p sum_pairs([1, 4, 8, 7, 3, 15], 8) == [1, 7] 
# p sum_pairs([1, -2, 3, 0, -6, 1], -6) == [0, -6]
# p sum_pairs([20, -13, 40], -7) == nil
sum_pairs([1, 2, 3, 4, 1, 0], 2) #== [1, 1]
sum_pairs([10, 5, 2, 3, 7, 5], 10) #== [3, 7]
sum_pairs([4, -2, 3, 3, 4], 8) #== [4, 4]
sum_pairs([0, 2, 0], 0) #== [0, 0]
sum_pairs([5, 9, 13, -3], 10) #== [13, -3] 
